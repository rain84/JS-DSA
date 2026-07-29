/**
 * 1129. Shortest Path with Alternating Colors
 * {@link https://leetcode.com/problems/shortest-path-with-alternating-colors/ | Link}
 */
export function shortestAlternatingPaths(
  n: number,
  redEdges: number[][],
  blueEdges: number[][]
): number[] {
  const g: [Graph, Graph] = [{}, {}]
  const res = Array(n).fill(-1)
  const seen = Array.from({ length: n }, () => Array.from({ length: 2 }, () => false))
  // prettier-ignore
  let q: Vertex[] = [ [0, 0], [0, 1] ]
  let d = 0

  seen[0][0] = seen[0][1] = true

  for (const [i, j] of redEdges) (g[0][i] ??= []).push(j)
  for (const [i, j] of blueEdges) (g[1][i] ??= []).push(j)

  while (q.length) {
    const qNext: Vertex[] = []

    for (const [i, color] of q) {
      if (res[i] === -1) res[i] = d

      for (const j of g[color][i] ?? []) {
        if (seen[j][color]) continue

        seen[j][color] = true
        qNext.push([j, (color ^ 1) as Color])
      }
    }

    q = qNext
    d++
  }

  return res
}

type Graph = Record<number, number[]>
type Color = 0 | 1
type Vertex = [number, Color]
