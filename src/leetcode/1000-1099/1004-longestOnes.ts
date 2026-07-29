/**
 * 1004. Max Consecutive Ones III
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4595/ | Link}
 *
 */
export const longestOnes = (nums: number[], k: number): number => {
  let max = 0

  for (let r = 0, l = 0; r < nums.length; r++) {
    if (nums[r] === 0) k--

    while (k < 0) {
      if (nums[l++] === 0) k++
    }

    max = Math.max(max, r - l + 1)
  }
  return max
}
