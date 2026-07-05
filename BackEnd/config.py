from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME", "cricscout")

client = None
db = None

def get_db():
    global client, db
    if client is None:
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
        db = client[DB_NAME]
    return db

# Collections — lazy loaded
def get_players_collection():
    return get_db()["players"]

def get_teams_collection():
    return get_db()["teams"]

def get_matches_collection():
    return get_db()["matches"]

# Keep backward compatibility
players_collection = None
teams_collection = None
matches_collection = None

def init_collections():
    global players_collection, teams_collection, matches_collection
    db = get_db()
    players_collection = db["players"]
    teams_collection = db["teams"]
    matches_collection = db["matches"]
    print(f"Connected to MongoDB: {DB_NAME}")