/*
 * graph_exec.js
 * Main entry point for the project.
 */

// Imports
var gr = require('./graph.cjs');
var gi = require('./graph_import.cjs');

// Create a new instance.
var GImport = new gi.GraphImport();
GImport.parseData();


console.log(GImport.G.V);
console.log('\n');
console.log(GImport.G.E);
console.log('\n');

// Display edges where vertex 'myVertex' is either a source or destination.
var myVertex = new gr.Vertex('v1');
var connectedEdges = GImport.G.getConnectedEdges(myVertex.name);
console.log('connected edges for: ' + myVertex.name);
console.log(connectedEdges);

// Get the edge containing minimum weight.
console.log('minimum edge')
console.log(GImport.G.getMinEdge());

// Get the edge containing maximum weight.
console.log('maximum edge')
console.log(GImport.G.getMaxEdge());

console.log('\n');

// Get the outbound edges for myVertex2.
var myVertex2 = new gr.Vertex('y1');
var outboundEdges = GImport.G.getOutboundEdges(myVertex2.name);
console.log('outbound edges for: ' + myVertex2.name);
console.log(outboundEdges);

//Get the inbound edges for myVertex3.
var myVertex3 = new gr.Vertex('w1');
var inboundEdges = GImport.G.getInboundEdges(myVertex3.name);
console.log('inbound edges for: ' + myVertex3.name);
console.log(inboundEdges);

// Get the edge index for myEdge.
var myEdge = new gr.Edge('0.2', 'y1', 'x1');
var edgeIndex = GImport.G.getEdgeIndex(myEdge.weight, myEdge.source, myEdge.destination);
console.log('edge index: ' + edgeIndex + '\n');

// Drop the minimum edge.
console.log(GImport.G.dropMinEdge());
// Drop the maximum edge.
console.log(GImport.G.dropMaxEdge());
console.log('Remaining edges');
console.log(GImport.G.E);
