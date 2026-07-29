/**
 * 643. Maximum Average Subarray I
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4594/ | Link}
 *
 */
export const findMaxAverage = (nums: number[], k: number): number => {
  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  let nextSum = sum
  for (let i = k; i < nums.length; i++) {
    nextSum += nums[i] - nums[i - k]
    sum = Math.max(sum, nextSum)
  }

  return sum / k
}
