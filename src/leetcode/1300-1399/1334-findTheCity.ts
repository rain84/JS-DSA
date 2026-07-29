import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
 * {@link https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/ | Link}
 */
export function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  const g = Array.from({ length: n }, () => new Map<number, number>())
  for (const [v1, v2, cost] of edges) {
    g[v1].set(v2, cost)
    g[v2].set(v1, cost)
  }

  const dijkstra = (v: number): number => {
    const dist: number[] = Array(n).fill(Number.POSITIVE_INFINITY)
    dist[v] = 0
    const pq = new MinPriorityQueue<number>()

    const seen = Array(n).fill(false)
    pq.enqueue(v, 0)

    while (!pq.isEmpty()) {
      const u = pq.dequeue().element
      if (seen[u]) continue
      seen[u] = true

      for (const [v, w] of g[u]) {
        if (seen[v]) continue

        const wNext = dist[u] + w
        if (wNext < dist[v]) {
          dist[v] = wNext
          pq.enqueue(v, dist[v])
        }
      }
    }

    return dist.filter((x) => x <= distanceThreshold).length
  }

  let [ans, i] = [n, Number.POSITIVE_INFINITY]
  for (let j = 0; j < n; j++) {
    const k = dijkstra(j)
    if (k < i || (k === i && j > ans)) {
      ans = j
      i = k
    }
  }

  return ans
}
