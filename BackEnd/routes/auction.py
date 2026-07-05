from flask import Blueprint, jsonify
from models.auction_service import get_player_auction_estimate, get_all_auction_estimates

auction_bp = Blueprint('auction', __name__)


@auction_bp.route('/auction/all', methods=['GET'])
def auction_all():
    return jsonify(get_all_auction_estimates()), 200


@auction_bp.route('/auction/<player_id>', methods=['GET'])
def auction_single(player_id):
    result = get_player_auction_estimate(player_id)
    if result is None:
        return jsonify({"error": f"Player '{player_id}' not found"}), 404
    return jsonify(result), 200