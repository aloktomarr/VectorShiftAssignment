from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import networkx as nx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
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
