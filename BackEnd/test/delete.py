import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from config import players_collection

players_collection.delete_many({})
print("All players deleted!")