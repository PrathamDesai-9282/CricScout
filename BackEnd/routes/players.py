from flask import Blueprint, jsonify, request
from models.player_service import get_all_players, insert_players, recalculate_all_scores, get_player_by_id
from models.clustering_service import run_clustering

players_bp = Blueprint('players', __name__)


@players_bp.route('/players', methods=['GET', 'POST'])
def players():
    if request.method == 'GET':
        return jsonify(get_all_players()), 200

    data = request.get_json()
    if not data or 'players' not in data or not isinstance(data['players'], list):
        return jsonify({"error": "Invalid input"}), 400

    inserted_ids = insert_players(data['players'])
    return jsonify({"inserted_ids": inserted_ids}), 201


@players_bp.route('/players/<player_id>', methods=['GET'])
def get_player(player_id):
    """Get a single player by player_id."""
    player = get_player_by_id(player_id)
    if player is None:
        return jsonify({"error": f"Player '{player_id}' not found"}), 404
    return jsonify(player), 200


@players_bp.route('/scouting/recalculate', methods=['POST'])
def recalculate():
    count = recalculate_all_scores()
    return jsonify({"message": f"Recalculated scores for {count} players"}), 200


@players_bp.route('/scouting/cluster', methods=['POST'])
def cluster_players():
    result = run_clustering()
    return jsonify(result), 200