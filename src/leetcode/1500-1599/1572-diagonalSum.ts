/**
 * 1572. Matrix Diagonal Sum
 * {@link https://leetcode.com/problems/matrix-diagonal-sum/ | Link}
 *
 * Topics: Array | Matrix
 *
 * Given a square matrix mat, return the sum of the matrix diagonals.
 * Only include the sum of all the elements on the primary diagonal
 * and all the elements on the secondary diagonal
 * that are not part of the primary diagonal.
 */
export function diagonalSum(mat: number[][]): number {
	const n = mat.length
	let res = 0

	for (let i = 0; i < n; i++) {
		res += mat[i][i] + mat[i][n - i - 1]
	}

	if (n & 1) {
		res -= mat[n >> 1][n >> 1]
	}

	return res
}
