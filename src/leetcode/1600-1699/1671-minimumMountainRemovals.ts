/**
 * {@link https://leetcode.com/problems/minimum-mountain-removals | 1671. Minimum Mountain Removals}
 *
 * Topics: Array | Binary Search | Dynamic Programming | Greedy
 */
export function minimumMountainRemovals(nums: number[]): number {
  const n = nums.length
  const [left, right] = [Array(n).fill(1), Array(n).fill(1)]

  for (let i = 1, i2 = n - 2; i < n; i++, i2--) {
    for (let j = 0, j2 = n - 1; j < i; j++, j2--) {
      if (nums[i] > nums[j]) {
        left[i] = Math.max(left[i], left[j] + 1)
      }

      if (nums[i2] > nums[j2]) {
        right[i2] = Math.max(right[i2], right[j2] + 1)
      }
    }
  }

  let max = 0
  for (let i = 0; i < n; i++) {
    if (left[i] > 1 && right[i] > 1) {
      max = Math.max(max, left[i] + right[i])
    }
  }

  return n - max + 1
}
