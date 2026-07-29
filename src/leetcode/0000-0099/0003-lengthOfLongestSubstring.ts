/**
 * 3. Longest Substring Without Repeating Characters
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4690/ | Link}
 *
 */
export function lengthOfLongestSubstring(s: string): number {
  let counter = 0
  let max = 0
  let l = 0
  let r = 0
  const obj: Record<string, number> = {}

  while (r < s.length) {
    const chRight = s[r]
    obj[chRight] = (obj[chRight] ?? 0) + 1

    while (obj[chRight] === 2) {
      const chLeft = s[l]

      obj[chLeft]--
      counter--
      l++
    }

    counter++
    r++

    max = Math.max(max, counter)
  }

  return max
}
