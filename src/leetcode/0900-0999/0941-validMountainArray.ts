/**
 * 941. Valid Mountain Array
 * {@link https://leetcode.com/problems/valid-mountain-array/ | Link}
 *
 * Topics: Array
 *
 * Given an array of integers arr, return true if and only if it is a valid mountain array.
 * Recall that arr is a mountain array if and only if:
 * - arr.length >= 3
 * - There exists some i with 0 < i < arr.length - 1 such that:
 *   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 *   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 */
export function validMountainArray(arr: number[]): boolean {
	let i = 1

	for (; i < arr.length; i++) {
		if (arr[i] <= arr[i - 1]) {
			break
		}
	}

	if (i === 1 || i === arr.length) return false

	for (; i < arr.length; i++) {
		if (arr[i] >= arr[i - 1]) {
			return false
		}
	}

	return true
}
