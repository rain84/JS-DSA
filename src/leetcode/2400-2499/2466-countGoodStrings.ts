/**
 * {@link https://leetcode.com/problems/count-ways-to-build-good-strings | 2466. Count Ways To Build Good Strings}
 *
 * Topics: Dynamic Programming
 */
export function countGoodStrings(low: number, high: number, zero: number, one: number): number {
  const modulo = 10 ** 9 + 7
  const dp: number[] = new Array(high + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] += dp[i - zero]
    if (i >= one) dp[i] += dp[i - one]
    dp[i] %= modulo
  }

  const res = dp.slice(low, high + 1).reduce((acc, cur) => acc + cur, 0)

  return res % modulo
}
