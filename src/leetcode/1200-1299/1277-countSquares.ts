/**
 * {@link https://leetcode.com/problems/count-square-submatrices-with-all-ones | 1277. Count Square Submatrices with All Ones}
 *
 * Topics: Array | Dynamic Programming | Matrix
 */
export function countSquares(matrix: number[][]): number {
  const [m, n] = [matrix.length, matrix[0].length]
  const dp = Array.from({ length: m }, () => Array(n))
  const dfs = (i: number, j: number): number => {
    if (i === m || j === n || !matrix[i][j]) return 0
    dp[i][j] ??= 1 + Math.min(dfs(i + 1, j), dfs(i, j + 1), dfs(i + 1, j + 1))
    return dp[i][j]
  }
  let res = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res += dfs(i, j)
    }
  }

  return res
}

/** TODO: Solve with tabulation */
export function countSquares3(matrix: number[][]): number {
  const [m, n] = [matrix.length, matrix[0].length]
  const dp = Array.from({ length: m }, () => Array(n).fill(0))
  const MAX = Number.POSITIVE_INFINITY
  let res = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!matrix[i][j]) continue
      if (i === 0 && j === 0) dp[i][j] = 1
      else {
        const [a, b, c] = [dp[i - 1]?.[j], dp[i]?.[j - 1], dp[i - 1]?.[j - 1]]
        dp[i][j] = 1 + Math.min(a ?? MAX, b ?? MAX, c ?? MAX)
      }
      res += dp[i][j]
    }
  }

  return res
}
