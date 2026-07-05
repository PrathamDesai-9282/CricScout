"""Player service layer — business logic for player CRUD operations."""

from datetime import datetime, timezone
from typing import Dict, List, Optional

from config import players_collection
from models.scouting_score import calculate_scouting_score
from models.auction_model import calculate_auction_points


def get_all_players() -> List[Dict]:
    """Fetch all players from the database."""
    return list(players_collection.find({}, {"_id": 0}))


def get_player_by_id(player_id: str) -> Optional[Dict]:
    """Fetch a single player by player_id."""
    return players_collection.find_one({"player_id": player_id}, {"_id": 0})


def _enrich_player(player: Dict) -> Dict:
    """Compute and attach scouting + auction data to a player document."""
    player["scouting"] = calculate_scouting_score(player)
    player["auction"] = calculate_auction_points(player)
    player.setdefault("metadata", {})
    player["metadata"]["updated_at"] = datetime.now(timezone.utc).isoformat()
    return player


def insert_players(players: List[Dict]) -> List[str]:
    """
    Insert a list of players, computing scouting and auction data for each.

    Args:
        players: List of player documents.

    Returns:
        List of inserted MongoDB IDs as strings.
    """
    inserted_ids = []
    for player in players:
        player = _enrich_player(player)
        player["metadata"]["created_at"] = player["metadata"]["updated_at"]
        player["metadata"].setdefault("source", "manual")
        result = players_collection.insert_one(player)
        inserted_ids.append(str(result.inserted_id))
    return inserted_ids


def recalculate_all_scores() -> int:
    """
    Recalculate scouting and auction data for every player in the database.

    Returns:
        Number of players updated.
    """
    players = list(players_collection.find({}))
    count = 0
    for player in players:
        enriched = _enrich_player(player)
        players_collection.update_one(
            {"_id": player["_id"]},
            {"$set": {
                "scouting": enriched["scouting"],
                "auction": enriched["auction"],
                "metadata.updated_at": enriched["metadata"]["updated_at"],
            }}
        )
        count += 1
    return count