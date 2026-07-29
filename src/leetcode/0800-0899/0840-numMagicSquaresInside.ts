/**
 * 840. Magic Squares In Grid
 * {@link https://leetcode.com/problems/magic-squares-in-grid/ | Link}
 *
 * Topics: Array | Hash Table | Math | Matrix
 *
 * Performance (by 'utils/perf.ts')
 * ───────────────────────────────────────────────────────────────────────────
 *  (index)  Function                ops/sec  Time (ms)  Iterations  Speed (%)
 * ───────────────────────────────────────────────────────────────────────────
 *  1        numMagicSquaresInside   620686   161        100000      100.00
 *  2        numMagicSquaresInside2  244941   408        100000      39.46
 * ───────────────────────────────────────────────────────────────────────────
 */
export function numMagicSquaresInside(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length]
  if (m < 3 || n < 3) return 0

  const check = (y: number, x: number) => {
    const g = grid
    if (g[y + 1][x + 1] !== 5) return 0

    const cells = [
      g[y][x],
      g[y][x + 1],
      g[y][x + 2],
      g[y + 1][x + 2],
      g[y + 2][x + 2],
      g[y + 2][x + 1],
      g[y + 2][x],
      g[y + 1][x],
    ]

    const i = cells.indexOf(2)
    if (i === -1) return 0
    cells.push(...cells.splice(0, i))

    const circle = [2, 9, 4, 3, 8, 1, 6, 7]
    const reverseCircle = [2, 7, 6, 1, 8, 3, 4, 9]

    if (cells.every((x, i) => x === circle[i])) return 1
    if (cells.every((x, i) => x === reverseCircle[i])) return 1

    return 0
  }

  let res = 0
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      res += check(i, j)
    }
  }

  return res
}

export function numMagicSquaresInside2(grid: number[][]): number {
  let [m, n] = [grid.length, grid[0].length]
  if (m < 3 || n < 3) return 0

  const check = (y: number, x: number) => {
    const SUM = 15
    const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
    for (let i = y; i < y + 3; i++) {
      for (let j = x; j < x + 3; j++) {
        set.delete(grid[i][j])
      }
    }

    if (set.size) return false

    if (
      grid[y][x] + grid[y + 1][x + 1] + grid[y + 2][x + 2] !== SUM ||
      grid[y][x + 2] + grid[y + 1][x + 1] + grid[y + 2][x] !== SUM
    )
      return false

    for (let i = y; i < y + 3; i++)
      if (grid[i][x] + grid[i][x + 1] + grid[i][x + 2] !== SUM) {
        return false
      }

    for (let i = x; i < x + 3; i++)
      if (grid[y][i] + grid[y + 1][i] + grid[y + 2][i] !== SUM) {
        return false
      }

    return true
  }

  let res = 0
  ;[m, n] = [m - 2, n - 2]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res += +check(i, j)
    }
  }

  return res
}
