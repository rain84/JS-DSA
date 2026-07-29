/**
 * 844. Backspace String Compare
 * {@link https://leetcode.com/problems/backspace-string-compare/ | Link}
 *
 */
export function backspaceCompare(s: string, t: string): boolean {
  const stack1: string[] = []
  const stack2: string[] = []
  const BACKSPACE = '#'
  const l = Math.max(s.length, t.length)

  for (let i = 0; i < l; i++) {
    const ch1 = s[i]
    const ch2 = t[i]

    if (ch1 === BACKSPACE) stack1.pop()
    else stack1.push(ch1)

    if (ch2 === BACKSPACE) stack2.pop()
    else stack2.push(ch2)
  }

  return stack1.join('') === stack2.join('')
}
