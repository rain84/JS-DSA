/**
 * {@link https://leetcode.com/problems/maximum-matrix-sum/ | 1975. Maximum Matrix Sum}
 *
 * Topics: Array | Greedy | Matrix
 */
export function maxMatrixSum(matrix: number[][]): number {
  let [sum, c, min] = [0, 0, Number.POSITIVE_INFINITY]

  for (const row of matrix) {
    for (let x of row) {
      if (x < 0) c++
      x = Math.abs(x)
      min = Math.min(min, x)
      sum += x
    }
  }

  return sum - (c & 1 ? 2 * min : 0)
}
