/**
 * {@link https://leetcode.com/problems/rotate-string | 796. Rotate String}
 *
 * Topics: String | String Matching
 */
export function rotateString(s: string, goal: string): boolean {
  const n = s.length

  for (let i = 0; i < n; i++) {
    if (s.slice(i) + s.slice(0, i) === goal) return true
  }

  return false
}

export const rotateString2 = (s: string, goal: string): boolean =>
  s.length === goal.length && (s + s).includes(goal)
