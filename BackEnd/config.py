from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME", "cricscout")

client = MongoClient(MONGO_URI)
db = client[DB_NAME]

# Collections
players_collection = db["players"]
teams_collection = db["teams"]
matches_collection = db["matches"]

print(f"Connected to MongoDB: {DB_NAME}")