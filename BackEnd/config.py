from pymongo import MongoClient
from dotenv import load_dotenv
import os
import ssl

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME", "cricscout")

client = MongoClient(
    MONGO_URI,
    serverSelectionTimeoutMS=30000,
    connectTimeoutMS=30000,
    socketTimeoutMS=30000,
    tls=True,
    tlsAllowInvalidCertificates=True
)
db = client[DB_NAME]

players_collection = db["players"]
teams_collection = db["teams"]
matches_collection = db["matches"]