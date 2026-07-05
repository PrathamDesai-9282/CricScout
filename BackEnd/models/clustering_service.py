"""Clustering service — assigns playing style clusters to players."""

from typing import Dict, List
from config import players_collection
from models.clustering import train_and_assign


def run_clustering() -> Dict:
    """
    Fetch all players, run KMeans clustering,
    and store cluster + playing_style back into MongoDB.

    Returns:
        Summary dict with count and cluster distribution.
    """
    players = list(players_collection.find({}, {"_id": 0}))

    if len(players) < 4:
        return {"error": "Not enough players to cluster (minimum 4 required)."}

    # Run clustering
    clustered = train_and_assign(players)

    # Store results back into MongoDB
    for player in clustered:
        players_collection.update_one(
            {"player_id": player["player_id"]},
            {"$set": {
                "cluster":       player["cluster"],
                "playing_style": player["playing_style"]
            }}
        )

    # Build summary
    distribution = {}
    for player in clustered:
        label = player["playing_style"]
        distribution[label] = distribution.get(label, 0) + 1

    return {
        "message":      f"Clustering complete for {len(clustered)} players.",
        "distribution": distribution
    }