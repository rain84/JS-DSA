/**
 *  1466. Reorder Routes to Make All Paths Lead to the City Zero
 *
 * {@link https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/ | Link}
 */

/** DFS */
export function minReorder(n: number, connections: number[][]): number {
  const graph: [number, number][][] = Array.from({ length: n }, () => [])
  const seen = new Set<number>()

  for (const [a, b] of connections) {
    // .push( [Neighbour, Road] )
    graph[a].push([b, 1])
    graph[b].push([a, 0])
  }

  const dfs = (x: number): number => {
    if (seen.has(x)) return 0

    seen.add(x)
    let res = 0

    // we should calculate all the roads from '0'
    for (const [neighbour, road] of graph[x]) {
      if (seen.has(neighbour)) continue
      res += road + dfs(neighbour)
    }

    return res
  }

  return dfs(0)
}

/** BFS */
export function minReorder2(n: number, connections: number[][]): number {
  const graph: [number, number][][] = Array.from({ length: n }, () => [])
  const seen = new Set<number>()

  for (const [a, b] of connections) {
    // .push( [Neighbour, Road] )
    graph[a].push([b, 1])
    graph[b].push([a, 0])
  }

  const q = [0]
  let res = 0

  for (const x of q) {
    if (seen.has(x)) continue
    seen.add(x)

    for (const [neighbour, road] of graph[x]) {
      if (seen.has(neighbour)) continue
      q.push(neighbour)

      // we should calculate all the roads from '0'
      res += road
    }
  }

  return res
}
