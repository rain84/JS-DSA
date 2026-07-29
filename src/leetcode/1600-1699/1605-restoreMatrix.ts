/**
 * 1605. Find Valid Matrix Given Row and Column Sums
 * {@link https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/ | Link}
 */
export function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  const m = rowSum.length
  const n = colSum.length
  const res = Array.from(new Array(m), () => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const x = Math.min(rowSum[i], colSum[j])
      res[i][j] = x
      rowSum[i] -= x
      colSum[j] -= x
    }
  }

  return res
}
