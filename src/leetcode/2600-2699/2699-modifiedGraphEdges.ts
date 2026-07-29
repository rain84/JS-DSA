import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * {@link https://leetcode.com/problems/modify-graph-edge-weights/ | 2699. Modify Graph Edge Weights}
 *
 * Topics: Graph | Heap (Priority Queue) | Shortest Path
 */
export function modifiedGraphEdges(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
  target: number
): number[][] {
  const g: Record<number, Map<number, { w: number; i: number }>> = {}
  const cost: Record<number, number> = {}
  const prev: Record<number, { vertex: number; i: number }> = {}
  const seen = new Set<number>()
  const q = new MinPriorityQueue<number>()

  for (let i = 0; i < edges.length; i++) {
    const [u, v, w] = edges[i]
    g[u] ??= new Map()
    g[v] ??= new Map()
    g[u].set(v, { w, i })
    g[v].set(u, { w, i })
    cost[u] = cost[v] = Number.POSITIVE_INFINITY
  }

  cost[source] = 0
  q.enqueue(source, 0)

  while (!q.isEmpty()) {
    const u = q.dequeue().element

    if (seen.has(u)) continue
    seen.add(u)

    for (let [v, { w, i }] of g[u]) {
      if (seen.has(v)) continue
      if (w === -1) w = 1

      const costNext = cost[u] + w

      if (costNext < cost[v]) {
        cost[v] = costNext
        q.enqueue(v, cost[v])
        prev[v] = { vertex: u, i }
      }
    }
  }

  if (cost[destination] > target) return []
  let [u, iLast] = [destination, -1]

  while (prev[u] !== undefined) {
    const { i, vertex } = prev[u]

    if (edges[i][2] === -1) {
      edges[i][2] = 1
      iLast = i
    }

    u = vertex
    target -= edges[i][2]
  }

  if (target !== 0) {
    if (iLast === -1) return []
    edges[iLast][2] = target + 1
  }

  for (const x of edges) {
    if (x[2] === -1) x[2] = 1
  }

  return edges
}
