from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import networkx as nx

app = FastAPI()

# Add CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    body = await request.json()
    nodes = [node["id"] for node in body.get("nodes", [])]
    edges = [(edge["source"], edge["target"]) for edge in body.get("edges", [])]
    graph = nx.DiGraph()
    graph.add_nodes_from(nodes)
    graph.add_edges_from(edges)
    num_nodes = len(graph.nodes)
    num_edges = len(graph.edges)
    is_dag = nx.is_directed_acyclic_graph(graph)

    return JSONResponse({
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    })
