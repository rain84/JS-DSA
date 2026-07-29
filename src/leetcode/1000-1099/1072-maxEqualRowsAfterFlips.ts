/**
 * {@link https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/ | 1072. Flip Columns For Maximum Number of Equal Rows}
 *
 * Topics: Array |  Matrix | Hash Table
 */
export function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const cnt: Record<string, number> = {}

  for (let row of matrix) {
    if (row[0]) row = row.map((x) => x ^ row[0])
    const key = String(row)
    cnt[key] = (cnt[key] ?? 0) + 1
  }

  return Math.max(...Object.values(cnt))
}
