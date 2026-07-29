/**
 * 1133. Largest Unique Number
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4662/ | Link}
 *
 */
export function largestUniqueNumber(nums: number[]): number {
  const map = new Map()

  for (const x of nums) {
    map.set(x, (map.get(x) ?? 0) + 1)
  }

  if (map.size === 0) return -1

  let max = Number.NEGATIVE_INFINITY

  for (const [x, c] of map) {
    if (c === 1 && max < x) {
      max = x
    }
  }

  return max === Number.NEGATIVE_INFINITY ? -1 : max
}
