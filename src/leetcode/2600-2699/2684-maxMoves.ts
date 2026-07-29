/**
 * {@link https://leetcode.com/problems/maximum-number-of-moves-in-a-grid | 2684. Maximum Number of Moves in a Grid}
 *
 * Topics: Array | Dynamic Programming | Matrix
 */
export function maxMoves(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length]
  const dp = Array.from({ length: m }, () => Array(n))

  const dfs = (i: number, j: number): number => {
    if (dp[i][j] !== undefined) return dp[i][j]

    let max = -1
    const next = [
      [-1, 1],
      [0, 1],
      [1, 1],
    ]

    for (const [dx, dy] of next) {
      const [x, y] = [i + dx, j + dy]
      if (x >= 0 && x < m && y < n && grid[x][y] > grid[i][j]) {
        max = Math.max(max, dfs(x, y))
      }
    }

    dp[i][j] ??= max + 1

    return dp[i][j]
  }

  let res = 0
  for (let i = 0; i < m; i++) {
    res = Math.max(res, dfs(i, 0))
  }

  return res
}
