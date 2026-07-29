/**
 * 399. Evaluate Division
 * {@link https://leetcode.com/problems/evaluate-division/ | Link}
 */
export function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const g: Record<string, [string, number][]> = {}
  const res = Array.from({ length: queries.length }, () => -1)

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i]
    ;(g[a] ??= []).push([b, values[i]])
    ;(g[b] ??= []).push([a, 1 / values[i]])
  }

  for (let i = 0; i < queries.length; i++) {
    const [c, d] = queries[i]
    const seen = new Set<string>()
    const q: [string, number][] = [[c, 1]]

    if (!g[c] || !g[d]) continue
    if (c === d) {
      res[i] = 1
      continue
    }

    for (const [current, v] of q) {
      if (seen.has(current)) continue
      seen.add(current)

      for (const [intermediate, multiplier] of g[current]) {
        if (seen.has(intermediate)) continue

        if (intermediate === d) {
          res[i] = v * multiplier
          break
        }

        q.push([intermediate, v * multiplier])
      }

      if (res[i] !== -1) break
    }
  }

  return res
}
