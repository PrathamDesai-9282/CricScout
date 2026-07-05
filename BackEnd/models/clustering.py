from typing import List, Dict

import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler


# -------------------------------------------------------
# Cluster Labels
# NOTE:
# Verify these after inspecting cluster_centers_
# -------------------------------------------------------

CLUSTER_LABELS = {
    0: "All-Round Threat",
    1: "Bowling Specialist",
    2: "Utility Player",
    3: "Batting Specialist",
}

# -------------------------------------------------------
# Feature Extraction
# -------------------------------------------------------

def build_feature_vector(player: Dict) -> List[float]:
    """
    Extract numerical features from player's scouting report.
    Features: batting_score, bowling_score, fielding_score,
              consistency_score, strike_rate (normalized)
    """
    scouting = player.get("scouting", {})
    batting  = player.get("batting", {})

    # Normalize strike rate to 0-100 (benchmark: 60-220)
    raw_sr = batting.get("strike_rate", 0)
    sr_norm = max(0, min((raw_sr - 60) / (220 - 60) * 100, 100))

    return [
        scouting.get("batting_score", 0),
        scouting.get("bowling_score", 0),
        scouting.get("fielding_score", 0),
        scouting.get("consistency_score", 0),
        sr_norm,
    ]


# -------------------------------------------------------
# Train Model
# -------------------------------------------------------

def train_and_assign(players: List[Dict]) -> List[Dict]:

    if len(players) < 4:
        raise ValueError("Need at least 4 players for KMeans clustering.")

    # --------------------------
    # Build feature matrix
    # --------------------------

    X = np.array([
        build_feature_vector(player)
        for player in players
    ])

    # --------------------------
    # Standardize Features
    # --------------------------

    scaler = StandardScaler()

    X_scaled = scaler.fit_transform(X)

    # --------------------------
    # Train KMeans
    # --------------------------

    kmeans = KMeans(
        n_clusters=4,
        random_state=42,
        n_init=10
    )

    labels = kmeans.fit_predict(X_scaled)

    # --------------------------
    # Assign Cluster
    # --------------------------

    for player, label in zip(players, labels):

        player["cluster"] = int(label)

        player["playing_style"] = CLUSTER_LABELS.get(
            int(label),
            "Unknown"
        )

    # --------------------------
    # Print Cluster Centers
    # (Useful while tuning)
    # --------------------------

    print("\nCluster Centers")

    for i, center in enumerate(kmeans.cluster_centers_):

        print(
            f"Cluster {i}:",
            np.round(center, 2)
        )

    return players