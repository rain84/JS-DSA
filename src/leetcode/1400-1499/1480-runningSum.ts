/**
 * 1480. Running Sum of 1d Array
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4658/ | Link}
 *
 */
export const runningSum = (nums: number[]): number[] => {
  const result: number[] = [nums[0]]

  for (let index = 1; index < nums.length; index++) {
    result.push(result[index - 1] + nums[index])
  }

  return result
}
