/**
 * {@link https://leetcode.com/problems/stone-game-ii/ | 1140. Stone Game II}
 *
 * Topics: Array | Math | Dynamic Programming | Prefix Sum | Game Theory
 */
export function stoneGameII(piles: number[]): number {
  const n = piles.length
  const dp = Array(n + 1).fill(0)
  const prefixSum = Array(n + 1).fill(0)
  let res = 0

  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + piles[i - 1]
  }

  const dfs = (i: number, m: number): number => {
    if (i >= n) return 0
    if (dp[i]) return dp[i]
  }

  return dfs(0, 1)
}
