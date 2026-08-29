/**
 * 119. Pascal's Triangle II
 * {@link https://leetcode.com/problems/pascals-triangle-ii/ | Link}
 *
 * Topics: Array | Dynamic Programming
 *
 * Given an integer rowIndex, return the rowIndex-th (0-indexed) row of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 */
export function getRow(rowIndex: number): number[] {
	let res = [1]

	for (let i = 1; i <= rowIndex; i++) {
		const next = Array(i + 1).fill(1)
		for (let j = 1; j < i; j++) {
			next[j] = res[j - 1] + res[j]
		}
		res = next
	}

	return res
}
