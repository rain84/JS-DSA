/**
 * 268. Missing Number
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4602/ | Link}
 *
 */
export function missingNumber(nums: number[]): number {
  const max = Math.max(...nums)
  const set = new Set(nums)

  for (let i = 0; i < max; i++) {
    if (!set.has(i)) return i
  }

  return max + 1
}
