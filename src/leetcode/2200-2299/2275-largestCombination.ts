/**
 * {@link https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero | 2275. Largest Combination With Bitwise AND Greater Than Zero}
 *
 * Topics: Array | Hash Table | Bit Manipulation | Counting
 */
export function largestCombination(candidates: number[]): number {
  const n = Math.max(...candidates).toString(2).length
  let res = 0

  for (let i = 0; i < n; i++) {
    let c = 0
    for (const x of candidates) {
      c += (x >> i) & 1
    }
    res = Math.max(res, c)
  }

  return res
}
