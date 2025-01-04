from fastapi import FastAPI, Form
from typing import List
from fastapi.responses import JSONResponse
import networkx as nx

app = FastAPI()

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: dict = Form(...)):
    nodes = pipeline['nodes']
    edges = pipeline['edges']
    num_nodes = len(nodes)
    num_edges = len(edges)
    graph = nx.DiGraph()
    graph.add_nodes_from(nodes)
    graph.add_edges_from(edges)
    is_dag = nx.is_directed_acyclic_graph(graph)
    return JSONResponse({'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag})