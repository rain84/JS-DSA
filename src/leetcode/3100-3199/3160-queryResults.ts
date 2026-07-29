/**
 * {@link https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls | 3160. Find the Number of Distinct Colors Among the Balls}
 *
 * Topics: Array | Hash Table | Simulation
 */
export function queryResults(limit: number, queries: number[][]): number[] {
  const balls = new Map<number, number>()
  const cnt = new Map<number, number>()
  const res: number[] = []

  for (const [i, color] of queries) {
    const currColor = balls.get(i) ?? 0

    if (currColor !== color) {
      const c = cnt.get(currColor) ?? 0
      if (c > 1) cnt.set(currColor, c - 1)
      else cnt.delete(currColor)

      cnt.set(color, (cnt.get(color) ?? 0) + 1)
    }

    balls.set(i, color)
    res.push(cnt.size)
  }

  return res
}
