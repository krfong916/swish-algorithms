import {depthFirst} from './depth-first-search';

function topologicalSort(adj) {
	depthFirst.dfs(adj);
	return depthFirst.getListOfFinishedVertexes();
}
