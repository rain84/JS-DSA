import type { Cb } from './graph'
import { Graph } from './graph'

let graph: Graph
let path: string[]
let edges: string[]
const cb: Cb = (v, edge) => {
	path.push(v)
	if (edge) edges.push(edge)
}

const asString = (graph: Graph) => {
	const path: string[] = []
	const vertexes = []
	graph.bfsRecursive('a', (v: string) => path.push(v))
	return path.sort().join('')
}

beforeEach(() => {
	/* 
     A
   /   \
  B     C
  |     |
  D-----E
   \   /
     F
*/
	graph = new Graph()
		.addEdge('a', 'b')
		.addEdge('a', 'c')
		.addEdge('b', 'd')
		.addEdge('c', 'e')
		.addEdge('d', 'e')
		.addEdge('d', 'f')
		.addEdge('e', 'f')

	path = []
	edges = []
})

it('should have "removeEdge()"', () => {
	graph.removeEdge('f', 'e')!.removeEdge('f', 'd')
	expect(asString(graph)).toBe('abcde')
})

it('should have "removeVertex()"', () => {
	graph.removeVertex('d')!.removeVertex('e')
	expect(asString(graph)).toBe('abc')
})

it('should have "dfsRecursive()"', () => {
	graph.dfsRecursive('a', cb)
	expect(path.join('')).toBe('abdecf')
	expect(edges.toString()).toBe('a-b,b-d,d-e,c-e,e-f')
})

xit('should have "dfsIterative()"', () => {
	// graph.dfsIterative('a', cb)
	expect(path.join('')).toBe('acefdb')
	expect(edges.toString()).toBe('a-c, c-e, e-f, f-d, d-b')
})
it('should have "bfsRecursive()"', () => {
	graph.bfsRecursive('a', cb)
	expect(path.join('')).toBe('abcdef')
	expect(edges.toString()).toBe('a-b,a-c,b-d,c-e,d-f')
})
it('should have "bfsIterative()"', () => {
	graph.bfsIterative('a', cb)
	expect(path.join('')).toBe('abcdef')
})
