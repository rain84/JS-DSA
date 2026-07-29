/**
 * 2090. K Radius Subarray Averages
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4836/ | Link}
 *
 */
export const getAverages = (nums: number[], k: number): number[] => {
  const res: number[] = []
  const prefixes: number[] = [nums[0]]

  for (let index = 1; index < nums.length; index++) {
    const element = nums[index]
    prefixes.push(element + prefixes[index - 1])
  }

  for (let index = 0; index < nums.length; index++) {
    const outOfRadius = index - k < 0 || index + k >= nums.length
    if (outOfRadius) res.push(-1)
    else {
      const sum = prefixes[index + k] - prefixes[index - k] + nums[index - k]
      const n = 2 * k + 1
      res.push((sum / n) | 0)
    }
  }

  return res
}
