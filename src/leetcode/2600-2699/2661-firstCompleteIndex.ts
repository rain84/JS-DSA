/**
 * {@link https://leetcode.com/problems/first-completely-painted-row-or-column | 2661. First Completely Painted Row or Column}
 *
 * Topics: Array | Hash Table | Matrix
 */
export function firstCompleteIndex(arr: number[], mtx: number[][]): number {
  const [m, n] = [mtx.length, mtx[0].length]
  const l = m * n
  const [cols, rows] = [Array(n).fill(m), Array(m).fill(n)]
  const idx = Array.from({ length: l }, () => [0, 0])

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      idx[mtx[i][j]] = [i, j]
    }
  }

  for (let i = 0; i < l; i++) {
    const [row, col] = idx[arr[i]]

    rows[row]--
    cols[col]--

    if (!rows[row] || !cols[col]) return i
  }

  return -1
}
