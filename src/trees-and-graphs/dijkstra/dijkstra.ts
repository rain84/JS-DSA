import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * Performance (by 'utils/perf.ts')
───────────────────────────────────────────────────────────────────────────
 (index)  Function               ops/sec  Time (ms)  Iterations  Speed (%)
───────────────────────────────────────────────────────────────────────────
 1        dijkstra  (PQ)         140990   709        100000      100.00
 2        dijkstra2 (sorting)    117732   849        100000      83.50
 3        dijkstra3 (DP)         58245    1716       100000      41.31
───────────────────────────────────────────────────────────────────────────
*/

/** Implemented with PriorityQueue */
export const dijkstra = (edges: Edges, vertex: V): Result => {
	const seen = new Set<V>()
	const g: Record<string, Map<V, number>> = {}
	const cost: Record<V, number> = {}

	for (const [u, v, w] of edges) {
		g[u] ??= new Map<V, number>()
		g[v] ??= new Map<V, number>()
		g[u].set(v, w)
		g[v].set(u, w)
		cost[u] = cost[v] = Number.POSITIVE_INFINITY
	}

	if (!g[vertex]) return { cost: {}, prev: {} }

	cost[vertex] = 0
	const q = new MinPriorityQueue<V>()
	q.enqueue(vertex, 0)
	const prev: Record<V, V> = {}

	while (!q.isEmpty()) {
		const u = q.dequeue().element
		if (seen.has(u)) continue
		seen.add(u)

		for (const [v, w] of g[u]) {
			if (seen.has(v)) continue

			const costNext = cost[u] + w
			if (costNext < cost[v]) {
				cost[v] = costNext
				prev[v] = u
				q.enqueue(v, w)
			}
		}
	}

	return { cost, prev }
}

/** Implemented with sorting  */
export const dijkstra2 = (edges: Edges, vertex: V): Result => {
	const seen = new Set<V>()
	const g: Record<string, Map<V, number>> = {}
	const cost: Record<V, number> = {}

	for (const [u, v, w] of edges) {
		g[u] ??= new Map<V, number>()
		g[v] ??= new Map<V, number>()
		g[u].set(v, w)
		g[v].set(u, w)
		cost[u] = cost[v] = Number.POSITIVE_INFINITY
	}

	if (!g[vertex]) return { cost: {}, prev: {} }

	cost[vertex] = 0
	const q: [V, number][] = [[vertex, 0]]
	const prev: Record<V, V> = {}

	while (q.length) {
		q.sort(([_, a], [__, b]) => b - a)
		const [u] = q.pop()!
		if (seen.has(u)) continue
		seen.add(u)

		for (const [v, w] of g[u]) {
			if (seen.has(v)) continue

			const costNext = cost[u] + w
			if (costNext < cost[v]) {
				cost[v] = costNext
				prev[v] = u
				q.push([v, w])
			}
		}
	}

	return { cost, prev }
}

/**  Implemented with dynamic programming */
export const dijkstra3 = (edges: Edges, u: V) => {
	const vertexes = [...new Set(edges.flatMap(([u, v]) => [u, v]))]
	const MAX = Number.POSITIVE_INFINITY
	const g = Object.fromEntries(
		vertexes.map((x) => [x, Object.fromEntries(vertexes.map((x) => [x, MAX]))]),
	)

	for (const [u, v, w] of edges) {
		g[u][v] = g[v][u] = w
	}

	if (!g[u]) return { cost: {}, prev: {} }

	const prev: Record<V, V> = {}
	const seen = new Set<V>()
	const cost = Object.fromEntries(vertexes.map((x) => [x, MAX]))
	cost[u] = 0

	let i = vertexes.length
	while (i--) {
		let k: V = ''
		for (const v of vertexes) {
			if (!seen.has(v) && cost[v] < (cost[k] ?? MAX)) {
				k = v
			}
		}
		seen.add(k)

		for (const u of vertexes) {
			const costNext = cost[k] + g[k][u]
			if (costNext < cost[u]) {
				cost[u] = costNext
				prev[u] = k
			}
		}
	}

	return { cost, prev }
}

export const getPath = (prev: Record<V, V>, v: V) => {
	if (!prev[v]) return []

	const path: V[] = [v]
	while (prev[v]) {
		path.push(prev[v])
		v = prev[v]
	}

	return path.reverse()
}

type V = number | string
export type Edges = ([string, string, number] | [number, number, number])[]
export type Result = {
	cost: Record<V, number>
	prev: Record<V, V>
}
