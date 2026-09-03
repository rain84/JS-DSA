import { adjacency, type Edges } from './adjacency'

it.each(
	//  prettier-ignore
	[
		[
			[
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
			] as Edges,
			{
				g: getGraph(),
				vertexes: ['a', 'b', 'c', 'e', 'f', 'g', 'h'],
			},
		],
		[
			[
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
			] as Edges,
			{
				g: getGraph(),
				vertexes: [0, 1, 2, 3, 4, 5, 6],
			},
		],
	],
)('should work %#', (input, output) => {
	expect(adjacency(input)).toMatchObject(output)
})

function getGraph() {
	return {
		directed: [
			[0, 4, 0, 0, 0, 7, 4],
			[0, 0, 9, 0, 6, 0, 1],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 8, 0, 0, 0, 0],
			[0, 0, 0, 6, 0, 0, 0],
			[0, 0, 0, 0, 7, 0, 0],
			[0, 0, 3, 0, 0, 0, 0],
		],
		undirected: [
			[0, 4, 0, 0, 0, 7, 4],
			[4, 0, 9, 0, 6, 0, 1],
			[0, 9, 0, 8, 0, 0, 3],
			[0, 0, 8, 0, 6, 0, 0],
			[0, 6, 0, 6, 0, 7, 0],
			[7, 0, 0, 0, 7, 0, 0],
			[4, 1, 3, 0, 0, 0, 0],
		],
	}
}

// Converts edges with numeric vertices to adjacency matrices correctly
it('should convert edges with numeric vertices to adjacency matrices correctly when vertexes are greater than 1', () => {
	const edges: Edges = [
		[1, 2, 5],
		[2, 3, 10],
		[1, 3, 15],
	]
	const result = adjacency(edges)
	expect(result.vertexes).toEqual([1, 2, 3])
	expect(result.g.directed).toEqual([
		[0, 5, 15],
		[0, 0, 10],
		[0, 0, 0],
	])
	expect(result.g.undirected).toEqual([
		[0, 5, 15],
		[5, 0, 10],
		[15, 10, 0],
	])
})
