/**
 * {@link https://leetcode.com/problems/2-keys-keyboard/ | 650. 2 Keys Keyboard}
 *
 * Topics: Math| Dynamic Programming
 */
export function minSteps2(n: number): number {
  const dp = Array(n + 1).fill(1000)
  dp[1] = 0

  // f(i) = f(j) + i/j
  for (let i = 2; i <= n; i++) {
    for (let j = 1, half = i >> 1; j <= half; j++) {
      if (i % j === 0) {
        dp[i] = Math.min(dp[i], dp[j] + i / j)
      }
    }
  }

  return dp[n]
}

/** One-liner */
export const minSteps = (n: number, dp = Array<number>(n + 1).fill(1000)): number => (
  dp.forEach((_, i) =>
    i < 2
      ? (dp[i] = 0)
      : Array.from(
          { length: i >> 1 },
          (_, j) => !(i % (j + 1)) && (dp[i] = Math.min(dp[i], dp[j + 1] + i / (j + 1)))
        )
  ),
  dp[n]
)
