/**
 * 344. Reverse String
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4592/ | Link}
 *
 * Do not return anything, modify s in-place instead.
 *
 */
export const reverseString = (s: string[]): void => {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    ;[s[l], s[r]] = [s[r], s[l]]
    l++
    r--
  }
}
