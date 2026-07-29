/**
 * 1971. Find if Path Exists in Graph
 * {@link https://leetcode.com/problems/find-if-path-exists-in-graph | Link}
 */

/** DFS */
export function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const graph: number[][] = Array.from({ length: n }, () => [])

  for (const [a, b] of edges) {
    graph[a].push(b)
    graph[b].push(a)
  }

  const seen = new Set<number>()
  const dfs = (i: number) => {
    if (i === destination) return true
    if (seen.has(i)) return false

    seen.add(i)
    return graph[i].some(dfs)
  }

  return dfs(source)
}

/** BFS */
export function validPath2(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const graph: number[][] = Array.from({ length: n }, () => [])

  for (const [a, b] of edges) {
    graph[a].push(b)
    graph[b].push(a)
  }

  const seen = new Set<number>()
  const q = [source]

  for (const i of q) {
    if (i === destination) return true
    if (seen.has(i)) continue

    seen.add(i)
    q.push(...graph[i])
  }

  return false
}
