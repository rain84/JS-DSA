/**
 * 1299. Replace Elements with Greatest Element on Right Side
 * {@link https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/ | Link}
 *
 * Topics: Array
 *
 * Given an array arr, replace every element in that array with the greatest element
 * among the elements to its right, and replace the last element with -1.
 * After doing so, return the array.
 */
export function replaceElements(arr: number[]): number[] {
	let max = arr[arr.length - 1]

	for (let i = arr.length - 2; i >= 0; i--) {
		;[arr[i], max] = [max, Math.max(arr[i], max)]
	}

	arr[arr.length - 1] = -1

	return arr
}
