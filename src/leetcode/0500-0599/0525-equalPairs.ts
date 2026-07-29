/**
 * 525. Contiguous Array
 * {@link https://leetcode.com/problems/equal-row-and-column-pairs/ | Link}
 *
 */
export function equalPairs(grid: number[][]): number {
  let res = 0
  const rows = new Map<string, number>()

  for (const a of grid) {
    const key = a.toString()
    rows.set(key, (rows.get(key) ?? 0) + 1)
  }

  for (let j = 0; j < grid.length; j++) {
    const col: number[] = []
    for (let i = 0; i < grid.length; i++) {
      col.push(grid[i][j])
    }

    const key = col.toString()
    res += rows.get(key) ?? 0
  }

  return res
}
