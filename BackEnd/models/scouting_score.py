from typing import Dict

# -------------------------
# Constants — easy to tune later
# -------------------------
BATTING_BENCHMARKS = {
    "average":          (0, 60),
    "strike_rate":      (60, 220),
    "runs":             (0, 2000),
    "boundary_percent": (10, 80),
}

BOWLING_BENCHMARKS = {
    "wickets":          (0, 100),
    "economy":          (3, 12),
    "dot_ball_percent": (10, 70),
}

FIELDING_BENCHMARKS = {
    "catches":    (0, 30),
    "run_outs":   (0, 15),
    "stumpings":  (0, 20),
}

BATTING_WEIGHTS = {
    "average": 0.35,
    "strike_rate": 0.30,
    "runs": 0.20,
    "boundary_percent": 0.15,
}

BOWLING_WEIGHTS = {
    "wickets": 0.45,
    "economy": 0.35,
    "dot_ball_percent": 0.20,
}

FIELDING_WEIGHTS = {
    "catches": 0.50,
    "run_outs": 0.30,
    "stumpings": 0.20,
}

# Overall score weights by role
ROLE_COMPONENT_WEIGHTS = {
    "batter":      {"batting": 0.80, "bowling": 0.00, "fielding": 0.20},
    "bowler":      {"batting": 0.00, "bowling": 0.80, "fielding": 0.20},
    "all-rounder": {"batting": 0.45, "bowling": 0.45, "fielding": 0.10},
}
DEFAULT_COMPONENT_WEIGHTS = {"batting": 0.40, "bowling": 0.40, "fielding": 0.20}


# -------------------------
# Helpers
# -------------------------
def clamp(value: float, minimum: float = 0, maximum: float = 100) -> float:
    return max(minimum, min(value, maximum))


def normalize(value: float, minimum: float, maximum: float) -> float:
    """Normalize a metric to 0–100 scale."""
    if maximum == minimum:
        return 0.0
    return clamp(((value - minimum) / (maximum - minimum)) * 100)


def _boundary_percent(batting: dict) -> float:
    """Calculate boundary run percentage from fours and sixes."""
    runs = batting.get("runs", 0)
    if runs <= 0:
        return 0.0
    boundary_runs = batting.get("fours", 0) * 4 + batting.get("sixes", 0) * 6
    return (boundary_runs / runs) * 100


# -------------------------
# Component Scores
# -------------------------
def batting_score(player: Dict) -> float:
    batting = player.get("batting", {})

    metrics = {
        "average":          batting.get("average", 0),
        "strike_rate":      batting.get("strike_rate", 0),
        "runs":             batting.get("runs", 0),
        "boundary_percent": _boundary_percent(batting),
    }

    score = sum(
        normalize(metrics[key], *BATTING_BENCHMARKS[key]) * weight
        for key, weight in BATTING_WEIGHTS.items()
    )
    return round(clamp(score), 2)


def bowling_score(player: Dict) -> float:
    bowling = player.get("bowling", {})

    wickets     = bowling.get("wickets", 0)
    economy     = bowling.get("economy") or 12.0
    dot_percent = bowling.get("dot_ball_percent", 0)

    wicket_score  = normalize(wickets, *BOWLING_BENCHMARKS["wickets"])
    economy_score = 100 - normalize(economy, *BOWLING_BENCHMARKS["economy"])
    dot_score     = normalize(dot_percent, *BOWLING_BENCHMARKS["dot_ball_percent"])

    score = (
        wicket_score  * BOWLING_WEIGHTS["wickets"] +
        economy_score * BOWLING_WEIGHTS["economy"] +
        dot_score     * BOWLING_WEIGHTS["dot_ball_percent"]
    )
    return round(clamp(score), 2)


def fielding_score(player: Dict) -> float:
    fielding = player.get("fielding", {})

    metrics = {
        "catches":   fielding.get("catches", 0),
        "run_outs":  fielding.get("run_outs", 0),
        "stumpings": fielding.get("stumpings", 0),
    }

    score = sum(
        normalize(metrics[key], *FIELDING_BENCHMARKS[key]) * weight
        for key, weight in FIELDING_WEIGHTS.items()
    )
    return round(clamp(score), 2)


# -------------------------
# Strengths / Weaknesses
# -------------------------
def _identify_strengths_weaknesses(bat: float, bowl: float, field: float) -> Dict:
    """Identify top strength and weakness from component scores."""
    components = {"Batting": bat, "Bowling": bowl, "Fielding": field}

    strengths = [name for name, score in components.items() if score >= 65]
    weaknesses = [name for name, score in components.items() if 0 < score < 40]

    return {"strengths": strengths, "weaknesses": weaknesses}


def _recommended_role(bat: float, bowl: float, field: float) -> str:
    """Suggest a role based on which component scores highest."""
    if bat >= 65 and bowl >= 65:
        return "All-Rounder"
    if bat >= bowl and bat >= field:
        return "Batter"
    if bowl >= bat and bowl >= field:
        return "Bowler"
    return "Fielding Specialist"


# -------------------------
# Overall Scouting Score
# -------------------------
def calculate_scouting_score(player: Dict) -> Dict:
    """
    Calculate full scouting breakdown for a player.

    Returns:
        dict matching the nested 'scouting' schema field.
    """
    role = player.get("role", "").strip().lower()

    bat   = batting_score(player)
    bowl  = bowling_score(player)
    field = fielding_score(player)

    weights = ROLE_COMPONENT_WEIGHTS.get(role, DEFAULT_COMPONENT_WEIGHTS)

    overall = (
        bat   * weights["batting"] +
        bowl  * weights["bowling"] +
        field * weights["fielding"]
    )
    overall = round(clamp(overall), 2)

    sw = _identify_strengths_weaknesses(bat, bowl, field)

    return {
        "overall_score":     overall,
        "batting_score":     bat,
        "bowling_score":     bowl,
        "fielding_score":    field,
        "consistency_score": player.get("scouting", {}).get("consistency_score", 0),
        "strengths":         sw["strengths"],
        "weaknesses":        sw["weaknesses"],
        "recommended_role":  _recommended_role(bat, bowl, field),
    }