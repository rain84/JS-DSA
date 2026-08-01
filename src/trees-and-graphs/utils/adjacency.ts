export const adjacency = (edges: Edges) => {
	const type = typeof edges[0][0] === 'number' ? 'number' : 'string'
	const vertexes: string[] = Array.from(
		new Set(edges.flatMap(([u, v]) => [String(u), String(v)])),
	).sort((a, b) => (type === 'number' ? +a - +b : a.localeCompare(b)))
	const vertexMap = Object.fromEntries(vertexes.map((v, i) => [v, i]))
	const n = vertexes.length
	const g = {
		directed: Array.from({ length: n }, () => Array(n).fill(0)),
		undirected: Array.from({ length: n }, () => Array(n).fill(0)),
	}

	for (const [u, v, weight] of edges) {
		const [x, y] = [vertexMap[u], vertexMap[v]]
		g.directed[x][y] = weight
		g.undirected[x][y] = weight
		g.undirected[y][x] = weight
	}

	return {
		g,
		vertexes: type === 'number' ? vertexes.map((x) => +x) : vertexes,
	}
}

export type Edges = Array<[number, number, number] | [string, string, number]>
