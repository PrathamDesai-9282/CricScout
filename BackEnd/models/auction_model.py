from typing import Dict

# -------------------------
# Constants
# -------------------------
SCORE_TIERS = [
    (80, 700),
    (60, 450),
    (40, 250),
    (0,  100),
]

ROLE_BONUSES = {
    "all-rounder": 150,
    "bowler":       50,
    "batter":       30,
}

AGE_BONUSES = [
    ((18, 24), 100),
    ((28, 35),  80),
]


def _base_points(scouting: float) -> int:
    for threshold, points in SCORE_TIERS:
        if scouting >= threshold:
            return points
    return 100


def _age_bonus(age: int) -> int:
    for (low, high), bonus in AGE_BONUSES:
        if low <= age <= high:
            return bonus
    return 0


def _consistency_bonus(consistency: float) -> float:
    return round(max(0, min(consistency, 100)), 2)


def calculate_auction_points(player: Dict, cap: int = 1000, floor: int = 50) -> Dict:
    """
    Calculate auction points for a player.

    Args:
        player: Player document — expects nested 'scouting' object.
        cap: Maximum auction points allowed.
        floor: Minimum auction points allowed.

    Returns:
        dict: Auction points with full breakdown.
    """
    scouting_obj = player.get("scouting", {})
    scouting     = scouting_obj.get("overall_score", 0) or 0
    consistency  = scouting_obj.get("consistency_score", 0) or 0

    role = player.get("role", "").strip().lower()
    age  = player.get("age", 25)

    base         = _base_points(scouting)
    role_bonus   = ROLE_BONUSES.get(role, 0)
    age_bonus    = _age_bonus(age)
    cons_bonus   = _consistency_bonus(consistency)

    raw_total    = base + role_bonus + age_bonus + cons_bonus
    final_points = round(max(floor, min(raw_total, cap)), 2)

    return {
        "auction_points": final_points,
        "breakdown": {
            "base_points":        base,
            "role_bonus":         role_bonus,
            "age_bonus":          age_bonus,
            "consistency_bonus":  cons_bonus,
            "raw_total":          raw_total,
        },
        "cap":   cap,
        "floor": floor,
    }