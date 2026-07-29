/**
 * 1631. Path With Minimum Effort
 * {@link https://leetcode.com/problems/path-with-minimum-effort/ | Link}
 */
export function minimumEffortPath(heights: number[][]): number {
  const check = (effort: number) => {
    const [m, n] = [heights.length, heights[0].length]
    const dirs = [1, 0, -1, 0, 1]
    const seen: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false))
    seen[0][0] = true
    const q = [[0, 0]]

    while (q.length) {
      const [i, j] = q.pop()!

      if (i === m - 1 && j === n - 1) return true

      for (let k = 0; k < 4; k++) {
        const [x, y] = [i + dirs[k], j + dirs[k + 1]]
        if (
          0 <= x &&
          x < m &&
          0 <= y &&
          y < n &&
          !seen[x][y] &&
          Math.abs(heights[x][y] - heights[i][j]) <= effort
        ) {
          seen[x][y] = true
          q.push([x, y])
        }
      }
    }
  }

  let [l, r] = [0, Math.max(...heights.flat())]
  while (l <= r) {
    const m = (l + r) >> 1

    if (check(m)) r = m - 1
    else l = m + 1
  }

  return l
}
