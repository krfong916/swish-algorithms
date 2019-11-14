// exhaustive search with backtracking
// choose a path that looks optimal
// exhaustively explore
// backtrack when we can no longer explore
// runtime O(V + E)
// we keep the following structures
// a list of finishing times
//
// recursive

let depthFirst = {
	COLOR: {
		WHITE,
		GREY,
		BLACK,
	},
	time: undefined,
	parent: [],
	getBackEdges: function() {},
	getCrossEdges: function() {},
	getForwardEdges: function() {},
	dfs: function(adj) {
		adj.forEach(vertex => {
			this.parent[vertex.id] = undefined;
			this.start[vertex.id] = undefined;
			this.finish[vertex.id] = undefined;
		});
		this.time = 0;
		adj.forEach(vertex => {
			if (vertex.color == COLOR.WHITE) {
				dfsVisit(adj, vertex);
			}
			// else {
			// is this where we perform edge classification?
			// }
		});
	},
	dfsVisit: function(adj, v) {
		this.time += 1;
		this.start[v.id] = time;
		v.color = COLOR.GREY;
		adj[v].forEach(vertex => {
			if (vertex.color == COLOR.WHITE) {
				this.parent[vertex.id] = v.id;
				this.dfsVisit(adj, vertex);
			}
			// else {
			// is this where we perform edge classification?
			// }
		});
		v.color = COLOR.BLACK;
		this.time += 1;
		this.finish[v.id] = time;
	},
};

// exhaustively explore all neighbors of the vertex v
// when we see a new neighbor, color that neighbor as grey
// increment time
// color the current vertex as grey
// for every neighbor of v
// if we haven't seen the vertex
// add v as parent of i
// dfsVisit();
// v.color = black
// increment time
// v.finish = time
// add the vertex to the list of finished vertices'
