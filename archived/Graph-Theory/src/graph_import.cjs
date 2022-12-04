/*
 * graph_import.js
 * Import graphs from a file.
 */

var exports = module.exports = {};

// Imports
var graph = require('./graph.cjs');
fs = require('fs');


function GraphImport() {
	this.srcFile = './data/graph2.dat';
	this.data = [];
	this.G = new graph.Graph();
	
	// Read the graph data using the synchronous method.
	this.data = fs.readFileSync(this.srcFile, 'utf8');
}

GraphImport.prototype.parseData = function() {
	var vCount = 0;
	var eCount = 0;
	
	var vertexName = '';
	
	// Loop over the data and get the vertices.
	for(var i=0; i<this.data.length; i++) {
		
		// Conclude reading a vertex.
		if((this.data[i] == ',') || (this.data[i] == '\r')) {
			this.G.addVertex(vertexName);
			vertexName = '';
			vCount++;
			continue;
		}
		// Skip over whitespace.
		else if (this.data[i] == ' ') {
			continue;
		}
		// Finished reading all vertices on the line.
		else if(this.data[i] == '\n') {
			i++;
			break;
		}
		// This is a valid character for the vertex name.
		else {
			vertexName += this.data[i];
		}
	}
	
	var k = 0; // index for edge property.
	var j = i; // current position in data[];
	
	var w, s, d;
	var edgeWeight = '';
	var edgeSource = '';
	var edgeDestination = '';
	
	// Loop over the remaining data and get the edges.
	while(j < this.data.length) {
		w = '';
		s = '';
		d = '';
		k = 0;
		
		// Read each line and grab the edge data.
		for( ; j<this.data.length; j++) {
			
			// Conclude either the edge weight or the source vertex.
			if(this.data[j] == ',') { 
				k++;
				continue;
			}
			// Skip over whitespace and carriage returns.
			else if ((this.data[j] == '\r') || (this.data[j] == ' ')) {
				continue;
			}
			// Finished reading the line, so add a new edge.
			else if(this.data[j] == '\n') {
				this.G.addEdge(w, s, d); 
				eCount++; 
				j++;
				break;
			}
			// This is a valid character describing the edge.
			else {
				switch(k) {
				case 0: // Edge weight
					w += this.data[j]; 
					break;
				case 1: // Source vertex for the edge
					s += this.data[j]; 
					break;
				case 2: // Destination vertex for the edge
					d += this.data[j]; 
					break;
				default: break;
				}
			}
		}
	}
	
	// Add in the last edge.
	this.G.addEdge(w, s, d);
	eCount++;
	
	console.log('Number of vertices read: ' + vCount);
	console.log('Number of edges read: ' + eCount);
	console.log('\n');
}

exports.GraphImport = GraphImport;
