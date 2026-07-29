/**
 * 74. Search a 2D Matrix
 * {@link https://leetcode.com/problems/search-a-2d-matrix/ | Link}
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  const [m, n] = [matrix.length, matrix[0].length]
  let [l, r] = [0, m * n - 1]

  while (l <= r) {
    const mid = (l + r) >> 1
    const i = (mid / n) | 0
    const j = mid % n
    const x = matrix[i][j]

    if (x === target) return true
    if (x > target) r = mid - 1
    else l = mid + 1
  }

  return false
}
