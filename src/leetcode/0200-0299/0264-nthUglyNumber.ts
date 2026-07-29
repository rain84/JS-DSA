/**
 * {@link https://leetcode.com/problems/ugly-number-ii/ | 264. Ugly Number II}
 *
 * Topics: Hash Table | Math | Dynamic Programming | Heap (Priority Queue)
 */
export function nthUglyNumber(n: number): number {
  const dp = Array<number>(n)
  const idx = { 2: 1, 3: 1, 5: 1 }
  const next = { 2: 2, 3: 3, 5: 5 }
  dp[0] = 1

  for (let i = 1; i < n; i++) {
    const x =
      next[2] > next[3] && next[2] > next[5] ? 2 : next[3] > next[2] && next[3] > next[5] ? 3 : 5
    dp[i] = next[x]
    idx[x]++
    next[x] = idx[x] * x
  }

  dp
  return dp.at(-1)!
}

console.log(nthUglyNumber(10))
// [1, 2, 3, 4, 5, 6, 8, 9, 10, 12]
