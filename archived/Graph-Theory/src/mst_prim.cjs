/*
 * mst_prim.js
 * Minimal Spanning Tree using Prim's algorithm.
 */

var exports = module.exports = {}

// Imports.
var G = require('./graph');

/*
 * Prim's algorithm
 * wG - a non-trivial connected weighted graph.
 */
function Prim(wG) {
	this.wG = wG;
	this.T = [];
	
	// Initialise the tree with an arbitrary vertex.
	this.T.addVertex(this.wG.getMinEdge());
	
	console.log(this.T);
}

exports.Prim = Prim;
