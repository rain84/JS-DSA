/**
 * 1091. Shortest Path in Binary Matrix
 * {@link https://leetcode.com/problems/shortest-path-in-binary-matrix/ | Link}
 */
export function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length - 1
  //  prettier-ignore
  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0], [-1, 1], [1, 1], [1, -1], [-1, -1]]
  let q = [[0, 0]]

  if (grid[0][0] === 1 || grid[n][n] === 1) return -1

  for (let res = 1; q.length > 0; res++) {
    const nextQ: number[][] = []

    for (const [y, x] of q) {
      if (x === n && y === n) return res

      for (const [i, j] of directions) {
        const nextY = y + i
        const nextX = x + j

        if (grid[nextY]?.[nextX] === 0) {
          nextQ.push([nextY, nextX])
          grid[nextY][nextX] = 1
        }
      }
    }

    q = nextQ
  }

  return -1
}
