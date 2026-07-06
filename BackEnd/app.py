from flask import Flask, jsonify
from flask_cors import CORS
from routes.players import players_bp
from routes.auction import auction_bp
import os

app = Flask(__name__)

CORS(app, origins="*", supports_credentials=False)

app.register_blueprint(players_bp, url_prefix='/api')
app.register_blueprint(auction_bp, url_prefix='/api')

@app.route('/')
def health():
    return jsonify({"status": "CricScout API is live"}), 200

if __name__ == '__main__':
    debug = os.getenv("FLASK_ENV", "production") == "development"
    port = int(os.getenv("PORT", 10000))
    app.run(debug=debug, host='0.0.0.0', port=port)