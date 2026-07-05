import json
import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from config import players_collection
from models.player_service import _enrich_player
from datetime import datetime, timezone


def clear_players():
    players_collection.delete_many({})
    print("Old player data removed.")


def load_seed_data():
    seed_path = os.path.join(os.path.dirname(__file__), "seed.json")
    with open(seed_path, "r", encoding="utf-8") as file:
        return json.load(file)


def ingest_players():
    players = load_seed_data()
    inserted = 0

    for player in players:
        player = _enrich_player(player)
        player.setdefault("metadata", {})
        player["metadata"]["created_at"] = player["metadata"]["updated_at"]
        player["metadata"]["source"] = "seed"

        players_collection.insert_one(player)
        inserted += 1
        print(f"✔ {player['name']} | Overall: {player['scouting']['overall_score']} | Auction: {player['auction']['auction_points']}")

    print("\n--------------------------------")
    print(f"Imported {inserted} players successfully.")
    print("--------------------------------")


if __name__ == "__main__":
    clear_players()
    ingest_players()