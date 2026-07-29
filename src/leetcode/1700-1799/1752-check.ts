/**
 * {@link https://leetcode.com/problems/check-if-array-is-sorted-and-rotated | 1752. Check if Array Is Sorted and Rotated}
 *
 * Topics: Array
 */
export function check(nums: number[]): boolean {
  const n = nums.length

  for (let i = 0, c = 1; i < n; i++) {
    if (nums[(i + 1) % n] < nums[i] && --c < 0) {
      return false
    }
  }

  return true
}
