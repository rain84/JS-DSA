/**
 * 3110. Score of a String
 * {@link https://leetcode.com/problems/score-of-a-string/ | Link}
 */
export function scoreOfString(s: string): number {
  let res = 0
  const n = s.length

  for (let i = 1; i < n; i++) {
    res += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1))
  }

  return res
}
