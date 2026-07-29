/**
 * 695. Max Area of Island
 * {@link https://leetcode.com/problems/max-area-of-island | Link}
 */
export function maxAreaOfIsland(grid: number[][]): number {
  const n = grid.length
  const m = grid[0].length
  let res = 0

  const dfs = (i: number, j: number): number => {
    if (grid[i]?.[j] !== 1) return 0
    grid[i][j] = 0

    return 1 + dfs(i + 1, j) + dfs(i, j + 1) + dfs(i - 1, j) + dfs(i, j - 1)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const x = grid[i][j]
      if (x === 1) res = Math.max(res, dfs(i, j))
    }
  }

  return res
}
