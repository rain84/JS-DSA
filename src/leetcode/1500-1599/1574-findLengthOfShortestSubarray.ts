/**
 * {@link https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/ | 1574. Shortest Subarray to be Removed to Make Array Sorted}
 *
 * Topics: Array | Two Pointers | Binary Search | Stack | Monotonic Stack
 */
export function findLengthOfShortestSubarray(arr: number[]): number {
  let [l, r, n] = [0, arr.length - 1, arr.length]

  while (r && arr[r - 1] <= arr[r]) r--
  if (r === 0) return 0

  let res = r
  while (l < r && (!l || arr[l - 1] <= arr[l])) {
    while (r < n && arr[l] > arr[r]) r++
    res = Math.min(res, r - l - 1)
    l++
  }

  return res
}
