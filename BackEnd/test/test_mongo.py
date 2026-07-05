import sys
import os

sys.path.append(
    os.path.dirname(
        os.path.dirname(os.path.abspath(__file__))
    )
)

from config import db

try:
    db.command("ping")
    print("MongoDB Connected Successfully!")
except Exception as e:
    print("Connection Failed:", e)