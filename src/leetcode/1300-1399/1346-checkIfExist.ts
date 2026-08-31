/**
 * {@link https://leetcode.com/problems/check-if-n-and-its-double-exist | 1346. Check If N and Its Double Exist}
 *
 * Topics: Array | Hash Table | Two Pointers | Binary Search | Sorting
 */
export function checkIfExist(arr: number[]): boolean {
	const map = new Map(arr.map((x, i) => [x, i]))
	return arr.some((x, i) => map.has(x * 2) && map.get(x * 2) !== i)
}
