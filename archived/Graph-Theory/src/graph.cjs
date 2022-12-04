/*
 * graph.js
 * Define the graph structure.
 */

var exports = module.exports = {};

// Vertex
function Vertex (v) {
	this.name = v
}

// Edge
function Edge (w, s, d) {
	this.weight = w,
	this.source = s,
	this.destination = d
}

// Directed graph
function Graph() {
	this.V = [];
	this.E = [];
}

/*
 * Append a vertex to the graph.
 * v - vertex name
 */
Graph.prototype.addVertex = function(v) {
	this.V.push(new Vertex(v));
}

/*
 * Append an edge to the graph.
 * w - edge weight
 * s - edge source node
 * d - edge destination node
 */
Graph.prototype.addEdge = function(w, s, d) {
	this.E.push(new Edge(w,s,d));
}

/*
 * Get the edge containing minimum weight.
 */
Graph.prototype.getMinEdge = function() {
	var i;
	var minWeight = 65536;
	var minIndex = -1;
	
	for(i=0; i<this.E.length; i++) {
		if(this.E[i].weight <= minWeight) {
			minWeight = this.E[i].weight;
			minIndex = i;
		}
	}
	
	return this.E[minIndex];
}

/*
 * Get the edge containing maximum weight.
 */
Graph.prototype.getMaxEdge = function() {
	var i;
	var maxWeight = -65536;
	var maxIndex = -1;
	
	for(i=0; i<this.E.length; i++) {
		if(this.E[i].weight >= maxWeight) {
			maxWeight = this.E[i].weight;
			maxIndex = i;
		}
	}
	
	return this.E[maxIndex];
}

/*
 * Drop the edge containing minimum weight from the list and return it.
 */
Graph.prototype.dropMinEdge = function() {
	var i;
	var minWeight = 65536;
	var minIndex = -1;
	
	for(i=0; i<this.E.length; i++) {
		if(this.E[i].weight <= minWeight) {
			minWeight = this.E[i].weight;
			minIndex = i;
		}
	}
	
	return this.E.splice(minIndex, 1)[0];
}

/*
 * Drop the edge containing maximum weight from the list and return it.
 */
Graph.prototype.dropMaxEdge = function() {
	var i;
	var maxWeight = -65536;
	var maxIndex = -1;
	
	for(i=0; i<this.E.length; i++) {
		if(this.E[i].weight >= maxWeight) {
			maxWeight = this.E[i].weight;
			maxIndex = i;
		}
	}
	
	return this.E.splice(maxIndex, 1)[0];
}

/*
 * Get edges connected to a given vertex.
 * v - the vertex to query for.
 */
Graph.prototype.getConnectedEdges = function(v) {
	var i;
	var edges = [];
	
	for(i=0; i<this.E.length; i++) {
		if((this.E[i]['source'] == v) || (this.E[i]['destination'] == v)) {
			edges.push(this.E[i]);
		}
	}
	
	return edges;
}

/*
 * Return all outbound edges for a given vertex.
 * v - the vertex that is the source.
 */
Graph.prototype.getOutboundEdges = function(v) {
	var i;
	var edges = [];
	
	for(i=0; i<this.E.length; i++) {
		if(this.E[i]['source'] == v) {
			edges.push(this.E[i]);
		}
	}
	
	return edges;
}

/*
 * Return all inbound edges for a given vertex.
 * v - the vertex that is the destination.
 */
Graph.prototype.getInboundEdges = function(v) {
	var i;
	var edges = [];
	
	for(i=0; i<this.E.length; i++) {
		if(this.E[i]['destination'] == v) {
			edges.push(this.E[i]);
		}
	}
	
	return edges;
}

/*
 * Get the index of a specific edge in the graph if it exists, -1 otherwise.
 * w - Edge weight
 * s - Edge source
 * d - Edge destination
 */
Graph.prototype.getEdgeIndex = function(w, s, d) {
	var i;
	var edgeIndex = -1;
	
	for(i=0; i<this.E.length; i++) {
		if((this.E[i]['weight'] == w) && (this.E[i]['source'] == s) 
				&& (this.E[i]['destination'] == d)) {
			edgeIndex = i;
			break;
		} 
	}
	
	return edgeIndex;
}


// Export structures.
exports.Vertex = Vertex;
exports.Edge = Edge;
exports.Graph = Graph;
