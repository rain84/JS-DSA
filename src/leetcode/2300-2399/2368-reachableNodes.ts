/**
 * 2368. Reachable Nodes With Restrictions
 * {@link https://leetcode.com/problems/reachable-nodes-with-restrictions/ | Link}
 */
export function reachableNodes(n: number, edges: number[][], restricted: number[]): number {
  const graph: number[][] = Array.from({ length: n }, () => [])
  const limited = new Set(restricted)
  const seen = new Set<number>()

  for (const [a, b] of edges) {
    graph[a].push(b)
    graph[b].push(a)
  }

  const dfs = (x: number): number => {
    if (seen.has(x) || limited.has(x)) return 0

    let res = 1
    seen.add(x)

    for (const i of graph[x]) res += dfs(i)

    return res
  }

  return dfs(0)
}
