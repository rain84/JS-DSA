/**
 * 2976. Minimum Cost to Convert String I
 * {@link https://leetcode.com/problems/minimum-cost-to-convert-string-i/ | Link}
 */
export function minimumCost(
  source: string,
  target: string,
  original: string[],
  changed: string[],
  cost: number[]
): number {
  const [n, m, MAX] = [source.length, original.length, Number.POSITIVE_INFINITY]
  const g = Array.from({ length: 26 }, () => Array(26).fill(MAX))
  const getIndex = (ch: string) => ch.charCodeAt(0) - 'a'.charCodeAt(0)
  for (let i = 0; i < 26; i++) g[i][i] = 0
  for (let i = 0; i < m; i++) {
    const x = getIndex(original[i])
    const y = getIndex(changed[i])
    g[x][y] = Math.min(g[x][y], cost[i])
  }

  for (let k = 0; k < 26; k++) {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; g[i][k] < MAX && j < 26; j++) {
        if (g[k][j] < MAX) {
          g[i][j] = Math.min(g[i][j], g[i][k] + g[k][j])
        }
      }
    }
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    const [x, y] = [getIndex(source[i]), getIndex(target[i])]
    if (x === y) continue
    if (g[x][y] === MAX) return -1
    res += g[x][y]
  }

  return res
}
