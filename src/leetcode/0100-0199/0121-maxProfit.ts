/**
 * {@link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ | 121. Best Time to Buy and Sell Stock}
 *
 * Topics: Array | Dynamic Programming
 */

/*
 * Performance (by 'utils/perf.ts'),
 * args = [[7, 1, 5, 3, 6, 4]]
 *
 * ───────────────────────────────────────────────────────────────────────────
 *  (index)  Function     ops/sec  Time (ms)  Iterations  Speed (%)
 * ───────────────────────────────────────────────────────────────────────────
 *  1        maxProfit    1964211   509       1000000     100.00
 *  2        maxProfit2   1428814   699       1000000     72.74
 *  3        maxProfit3   689871   1449       1000000     35.12
 * ───────────────────────────────────────────────────────────────────────────
 */

export function maxProfit(prices: number[]): number {
  const n = prices.length
  if (n <= 1) return 0

  let [res, min] = [0, prices[0]]

  for (const x of prices) {
    res = Math.max(res, x - min)
    min = Math.min(min, x)
  }

  return res
}

export function maxProfit2(prices: number[]): number {
  const n = prices.length
  if (n <= 1) return 0

  let [res, max] = [0, prices.at(-1)!]

  for (let i = n - 2; i >= 0; i--) {
    res = Math.max(res, max - prices[i])
    max = Math.max(max, prices[i])
  }

  return res
}

export function maxProfit3(prices: number[]): number {
  const n = prices.length
  if (n <= 1) return 0
  const dp = Array(n - 1).fill(0)

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      dp[i] = Math.max(dp[i], prices[j] - prices[i])
    }
  }

  return Math.max(...dp)
}
