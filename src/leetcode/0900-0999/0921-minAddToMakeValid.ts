/**
 * {@link https://leetcode.com/problems/minimum-add-to-make-parentheses-valid | 921. Minimum Add to Make Parentheses Valid}
 *
 * Topics: String | Stack | Greedy
 */
export function minAddToMakeValid(s: string): number {
  let [x, c] = [0, 0]

  for (const ch of s) {
    if (ch === '(') x++
    else if (x) {
      x--
    } else c++
  }

  return x + c
}

export function minAddToMakeValid2(s: string): number {
  const l = s.length
  s = s.replace('()', '')

  return s.length === l ? l : minAddToMakeValid2(s)
}
