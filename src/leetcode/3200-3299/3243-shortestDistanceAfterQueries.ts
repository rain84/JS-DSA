/**
 * {@link https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i | 3243. Shortest Distance After Road Addition Queries I}
 *
 * Topics: Array | Breadth-First Search | Graph
 */
export function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
  const res: number[] = []
  const path = Array.from({ length: n }, (_, i) => n - i - 1)

  for (const [u, v] of queries) {
    path[u] = Math.min(path[u], path[v] + 1)

    for (let i = u - 1; i >= 0; i--) {
      path[i] = Math.min(path[i], path[i + 1] + 1)
    }

    res.push(path[0])
  }

  path

  return res
}

console.log(
  shortestDistanceAfterQueries(6, [
    [1, 3],
    [3, 5],
  ])
)
