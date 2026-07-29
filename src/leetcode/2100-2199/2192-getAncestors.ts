/**
 * 2192. All Ancestors of a Node in a Directed Acyclic Graph
 * {@link https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/ | Link}
 */
export function getAncestors(n: number, edges: number[][]): number[][] {
  const res: number[][] = Array.from({ length: n }, () => [])
  const g: number[][] = Array.from({ length: n }, () => [])

  for (const [from, to] of edges) {
    g[to].push(from)
  }

  for (let i = 0; i < n; i++) {
    let q = [i]
    const seen = new Set<number>()

    while (q.length) {
      const qNext: number[] = []

      for (const x of q) {
        if (seen.has(x)) continue
        seen.add(x)
        qNext.push(...g[x])
      }

      q = qNext
    }

    seen.delete(i)
    res[i] = [...seen]
    res[i].sort((a, b) => a - b)
  }

  return res
}
