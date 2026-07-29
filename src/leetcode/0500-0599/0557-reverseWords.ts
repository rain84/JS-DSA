/**
 * 557. Reverse Words in a String III
 * {@link https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/1240042260/ | Link}
 *
 */
export function reverseWords(s: string): string {
  const res: string[] = []
  const SPACE = ' '

  for (let i = 0, l = 0; i < s.length; i++) {
    const ch = s[i]
    const next = s[i + 1]
    const prev = s[i - 1]

    if (ch === SPACE) {
      res.push(ch)
      continue
    }

    if (prev === SPACE) l = i
    if (next && next !== SPACE) continue

    let r = i

    while (r >= l) {
      res.push(s[r])
      r--
    }
  }

  return res.join('')
}
