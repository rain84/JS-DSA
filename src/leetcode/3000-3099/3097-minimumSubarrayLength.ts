/**
 * {@link https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii | 3097. Shortest Subarray With OR at Least K II}
 *
 * Topics: Array | Bit Manipulation | Sliding Window
 */
export function minimumSubarrayLength(nums: number[], k: number): number {
  const n = nums.length
  let res = Number.POSITIVE_INFINITY
  let [l, r, or] = [-1, 0, nums[0]]

  while (l < r) {
    if (or >= k) {
      res = Math.min(res, r - l)
      l++
      or &= ~nums[l]
    } else if (r < n - 1) {
      r++
      or |= nums[r]
    } else break
  }

  return res === Number.POSITIVE_INFINITY ? -1 : res
}

console.log(minimumSubarrayLength([1, 2, 32, 21], 55))
// console.log(minimumSubarrayLength([2, 1, 8], 10))
// console.log(minimumSubarrayLength([1, 2], 0))
// console.log(minimumSubarrayLength([1, 2], 0))

print([1, 2, 32, 21, 55])

function print(arr: number[]) {
  const binaryArray = arr.map((x) => x.toString(2))
  const l = Math.max(...binaryArray.map((x) => x.length))

  for (const x of binaryArray) {
    console.log(x.padStart(l, '0'))
  }
}
