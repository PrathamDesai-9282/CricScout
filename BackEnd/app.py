from flask import Flask
from flask_cors import CORS
from routes.players import players_bp
from routes.auction import auction_bp
import os

app = Flask(__name__)

# In production, restrict to your frontend URL
CORS(app, origins=os.getenv("ALLOWED_ORIGINS", "*"))

app.register_blueprint(players_bp, url_prefix='/api')
app.register_blueprint(auction_bp, url_prefix='/api')

if __name__ == '__main__':
    debug = os.getenv("FLASK_ENV", "production") == "development"
    app.run(debug=debug, host='0.0.0.0', port=int(os.getenv("PORT", 5000)))