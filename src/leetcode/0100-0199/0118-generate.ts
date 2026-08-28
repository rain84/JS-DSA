/**
 * 118. Pascal's Triangle
 * {@link https://leetcode.com/problems/pascals-triangle/ | Link}
 *
 * Topics: Array | Dynamic Programming
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 */
export function generate(numRows: number): number[][] {
	if (numRows <= 0) return []
	const res: number[][] = [[1]]

	for (let i = 1; i < numRows; i++) {
		const prev = res[i - 1]
		const row = Array(i + 1).fill(1)
		for (let j = 1; j < i; j++) {
			row[j] = prev[j - 1] + prev[j]
		}
		res.push(row)
	}

	return res
}
