/**
 *  200. Number of Islands
 *  {@link https://leetcode.com/problems/number-of-islands/ | Link}
 */

export function numIslands(grid: string[][]): number {
  // prevent mutation of the input, just rule of thumb
  // grid = Array(grid.length)
  //   .fill(0)
  //   .map((_, i) => [...grid[i]])

  let res = 0
  const m = grid.length
  const n = grid[0].length

  const dfs = (i: number, j: number) => {
    if (grid[i]?.[j] !== '1') return

    grid[i][j] = '0'

    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)
        res++
      }
    }
  }

  return res
}
