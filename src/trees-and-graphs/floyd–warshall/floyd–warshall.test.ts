import { adjacency, Edges } from 'trees-and-graphs/utils/adjacency'
import { floyd_warshall } from './floyd–warshall'

it('should work 1', () => {
	const edges: Edges = [
		['a', 'b', 4],
		['a', 'g', 7],
		['a', 'h', 4],
		['b', 'c', 9],
		['b', 'f', 6],
		['b', 'h', 1],
		['e', 'c', 8],
		['f', 'e', 6],
		['g', 'f', 7],
		['h', 'c', 3],
	]
	const g = adjacency(edges).g.directed
	expect(floyd_warshall(g)).toMatchObject(getOutput())
})

it('should work 2', () => {
	const edges: Edges = [
		[0, 1, 4],
		[0, 5, 7],
		[0, 6, 4],
		[1, 2, 9],
		[1, 4, 6],
		[1, 6, 1],
		[3, 2, 8],
		[4, 3, 6],
		[5, 4, 7],
		[6, 2, 3],
	]
	const g = adjacency(edges).g.directed
	expect(floyd_warshall(g)).toMatchObject(getOutput())
})

const MAX = Number.POSITIVE_INFINITY

// Handles graphs with negative edge weights
it('should handle graphs with negative edge weights', () => {
	const graph = [
		[0, -1, 4],
		[MAX, 0, 3],
		[MAX, MAX, 0],
	]
	const result = floyd_warshall(graph)
	const expected = [
		[0, -1, 2],
		[MAX, 0, 3],
		[MAX, MAX, 0],
	]
	expect(result).toEqual(expected)
})

function getOutput() {
	return [
		[0, 4, 7, 16, 10, 7, 4],
		[MAX, 0, 4, 12, 6, MAX, 1],
		[MAX, MAX, 0, MAX, MAX, MAX, MAX],
		[MAX, MAX, 8, 0, MAX, MAX, MAX],
		[MAX, MAX, 14, 6, 0, MAX, MAX],
		[MAX, MAX, 21, 13, 7, 0, MAX],
		[MAX, MAX, 3, MAX, MAX, MAX, 0],
	]
}
