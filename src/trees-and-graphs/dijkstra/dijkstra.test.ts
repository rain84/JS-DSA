import { dijkstra, dijkstra2, dijkstra3, type Edges, getPath } from './dijkstra'

it.each([dijkstra, dijkstra2, dijkstra3])('dijkstra should work 1-%#', (f) => {
	const edges: Edges = [
		['a', 'b', 2],
		['a', 'c', 1],
		['b', 'f', 7],
		['c', 'd', 5],
		['c', 'e', 2],
		['d', 'f', 2],
		['e', 'f', 1],
		['f', 'g', 1],
	]

	const d = f(edges, 'a')
	expect(d.cost).toMatchObject({ a: 0, b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 })
	expect(d.prev).toMatchObject({ b: 'a', c: 'a', d: 'c', e: 'c', f: 'e', g: 'f' })
	expect(getPath(d.prev, 'g')).toMatchObject(['a', 'c', 'e', 'f', 'g'])
})

it.each([dijkstra, dijkstra2, dijkstra3])('dijkstra should work 2-%#', (f) => {
	const edges: Edges = [
		[1, 2, 7],
		[1, 3, 9],
		[1, 6, 14],
		[2, 3, 10],
		[2, 4, 15],
		[3, 4, 11],
		[3, 6, 2],
		[4, 5, 6],
		[5, 6, 9],
	]

	const d = f(edges, 1)
	expect(d.cost).toMatchObject({ 1: 0, 2: 7, 3: 9, 4: 20, 5: 20, 6: 11 })
	expect(d.prev).toMatchObject({ 2: 1, 3: 1, 4: 3, 5: 6, 6: 3 })
	expect(getPath(d.prev, 5)).toMatchObject([1, 3, 6, 5])
})
