/**
 * {@link https://leetcode.com/problems/delete-characters-to-make-fancy-string | 1957. Delete Characters to Make Fancy String}
 *
 * Topics: String
 */
export function makeFancyString(s: string): string {
  let [c, res, prev] = [0, '', '']

  for (const x of s) {
    if (x === prev) c++
    else c = 1
    if (c <= 2) res += x

    prev = x
  }

  return res
}

export function makeFancyString2(s: string): string {
  let res = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1] && s[i] === s[i - 2]) continue
    res += s[i]
  }

  return res
}

/** One-Liner */
export const makeFancyString3 = (s: string): string =>
  [...s].reduce((a, v, i) => (v === s[i - 1] && v === s[i - 2] ? a : a + v), '')

/** One-Liner */
export const makeFancyString4 = (s: string): string => (
  [...new Set(s)].map((c) => (s = s.replace(new RegExp(`${c}{3,}`, 'g'), c + c))), s
)

/** One-Liner */
export const makeFancyString5 = (s: string): string => s.replace(/(.)\1\1+/g, '$1$1')
