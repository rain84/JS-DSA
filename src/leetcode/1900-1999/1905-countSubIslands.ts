/**
 * {@link https://leetcode.com/problems/count-sub-islands/ | 1905. Count Sub Islands}
 *
 * Topics: Array | Depth-First Search | Breadth-First Search | Union Find | Matrix
 */
export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const [m, n] = [grid1.length, grid1[0].length]
  const dirs = [-1, 0, 1, 0, -1]
  let res = 0

  const dfs = (q: number[][]): number => {
    let ok = 1

    while (q.length) {
      const nextQ: number[][] = []

      for (const [i, j] of q) {
        if (i < 0 || m <= i || j < 0 || n <= j || grid2[i][j] === 0) continue
        grid2[i][j] = 0
        ok &&= grid1[i][j]

        for (let k = 0; k < 4; k++) {
          const [y, x] = [i + dirs[k], j + dirs[k + 1]]
          nextQ.push([y, x])
        }
      }

      q = nextQ
    }

    return ok
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j]) {
        res += dfs([[i, j]])
      }
    }
  }

  return res
}
