/**
 * {@link https://leetcode.com/problems/count-servers-that-communicate | 1267. Count Servers that Communicate}
 *
 * Topics: Array | Depth-First Search | Breadth-First Search | Union Find | Matrix | Counting
 */
export function countServers(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length]
  const row = new Array(m).fill(0)
  const col = new Array(n).fill(0)
  let res = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        row[i]++
        col[j]++
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && (row[i] > 1 || col[j] > 1)) {
        res++
      }
    }
  }

  return res
}
