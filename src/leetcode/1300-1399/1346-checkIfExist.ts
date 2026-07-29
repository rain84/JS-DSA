/**
 * {@link https://leetcode.com/problems/check-if-n-and-its-double-exist | 1346. Check If N and Its Double Exist}
 *
 * Topics: Array | Hash Table | Two Pointers | Binary Search | Sorting
 */
export function checkIfExist(arr: number[]): boolean {
  const set = new Map(arr.map((x, i) => [x, i]))
  return arr.some((x, i) => set.has(x * 2) && set.get(x * 2) !== i)
}
