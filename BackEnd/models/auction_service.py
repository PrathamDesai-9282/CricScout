"""Auction service layer — business logic for auction estimation."""

from typing import Dict, List, Optional
from models.auction_model import calculate_auction_points


def _get_collection():
    from config import players_collection
    return players_collection


def get_player_auction_estimate(player_id: str) -> Optional[Dict]:
    player = _get_collection().find_one({"player_id": player_id}, {"_id": 0})
    if not player:
        return None
    result = calculate_auction_points(player)
    return {
        "player": player["name"],
        "role": player.get("role"),
        "score": player.get("scouting", {}).get("overall_score"),
        "auction": result,
    }


def get_all_auction_estimates() -> List[Dict]:
    players = list(_get_collection().find({}, {"_id": 0}))
    results = []
    for player in players:
        result = calculate_auction_points(player)
        results.append({
            "player": player["name"],
            "role": player.get("role"),
            "scouting_score": player.get("scouting", {}).get("overall_score"),
            "auction_points": result["auction_points"],
            "breakdown": result["breakdown"],
        })
    results.sort(key=lambda x: x["auction_points"], reverse=True)
    return results