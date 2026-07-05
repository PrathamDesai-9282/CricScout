from flask import Flask, jsonify
from flask_cors import CORS
from routes.players import players_bp
from routes.auction import auction_bp
import os

app = Flask(__name__)

CORS(app, origins=os.getenv("ALLOWED_ORIGINS", "*"))

app.register_blueprint(players_bp, url_prefix='/api')
app.register_blueprint(auction_bp, url_prefix='/api')

@app.route('/')
def health():
    return jsonify({"status": "CricScout API is live"}), 200

if __name__ == '__main__':
    debug = os.getenv("FLASK_ENV", "production") == "development"
    app.run(debug=debug, host='0.0.0.0', port=int(os.getenv("PORT", 5000)))