/**
 * 323. Number of Connected Components in an Undirected Graph
 * {@link https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/ | Link}
 */
export function countComponents(n: number, edges: number[][]): number {
  const graph: number[][] = Array.from({ length: n }, () => [])
  const seen = new Set<number>()
  let res = 0

  for (const [i, j] of edges) {
    graph[i].push(j)
    graph[j].push(i)
  }

  const dfs = (i: number) => {
    if (seen.has(i)) return

    seen.add(i)
    for (const j of graph[i]) {
      dfs(j)
    }
  }

  for (let i = 0; i < n; i++) {
    if (seen.has(i)) continue

    dfs(i)
    res++
  }

  return res
}

/** BFS */
export function countComponents2(n: number, edges: number[][]): number {
  const graph: Map<number, number[]> = new Map(Array.from({ length: n }, (_, i) => [i, []]))
  const seen = new Set<number>()
  let res = 0

  for (const [a, b] of edges) {
    graph.get(a)!.push(b)
    graph.get(b)!.push(a)
  }

  console.log(graph)
  for (const [i] of graph) {
    if (seen.has(i)) continue

    const q = [i]
    for (const j of q) {
      if (seen.has(j)) continue

      seen.add(j)
      q.push(...graph.get(j)!)
    }

    res++
  }

  return res
}
