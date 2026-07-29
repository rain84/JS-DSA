/**
 * 283. Move Zeroes
 * {@link https://leetcode.com/problems/move-zeroes/ | Link}
 */
export function moveZeroes(nums: number[]): void {
  const n = nums.length
  for (let i = 0, j = 0; i < n; i++) {
    if (nums[i] && !nums[j]) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    }

    if (nums[j]) j++
  }
}
