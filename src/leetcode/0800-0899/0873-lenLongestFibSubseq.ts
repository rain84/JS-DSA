/**
 * {@link https://leetcode.com/problems/length-of-longest-fibonacci-subsequence | 873. Length of Longest Fibonacci Subsequence}
 *
 * Topics: Array | Hash Table | Dynamic Programming
 */
export function lenLongestFibSubseq(arr: number[]): number {
  const n = arr.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  const idx = new Map(arr.map((x, i) => [x, i]))
  let res = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const next = arr[i] + arr[j]

      if (idx.has(next)) {
        const k = idx.get(next)!
        dp[j][k] = (dp[i][j] || 2) + 1
        res = Math.max(res, dp[j][k])
      }
    }
  }

  return res
}
