import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from models.clustering_service import run_clustering

result = run_clustering()
print(result)