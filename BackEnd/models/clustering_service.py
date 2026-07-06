"""Clustering service — assigns playing style clusters to players."""

from typing import Dict
from models.clustering import train_and_assign


def _get_collection():
    from config import players_collection
    return players_collection


def run_clustering() -> Dict:
    collection = _get_collection()
    players = list(collection.find({}, {"_id": 0}))

    if len(players) < 4:
        return {"error": "Not enough players to cluster (minimum 4 required)."}

    clustered = train_and_assign(players)

    for player in clustered:
        collection.update_one(
            {"player_id": player["player_id"]},
            {"$set": {
                "cluster":       player["cluster"],
                "playing_style": player["playing_style"]
            }}
        )

    distribution = {}
    for player in clustered:
        label = player["playing_style"]
        distribution[label] = distribution.get(label, 0) + 1

    return {
        "message":      f"Clustering complete for {len(clustered)} players.",
        "distribution": distribution
    }