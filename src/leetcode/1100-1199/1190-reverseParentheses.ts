import { perf } from 'utils/perf'

/**
 * 1190. Reverse Substrings Between Each Pair of Parentheses
 * {@link https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/ | Link}
 */
export function reverseParentheses(s: string): string {
  const res: string[] = []
  const n = s.length
  const pairs = Array(n).fill(-1)
  const stack: number[] = []

  for (let i = 0; i < n; i++) {
    if (s[i] === '(') stack.push(i)
    else if (s[i] === ')') {
      const j = stack.pop()!
      ;[pairs[i], pairs[j]] = [j, i]
    }
  }

  for (let i = 0, step = 1; i < n; i += step) {
    const ch = s[i]

    if ('()'.includes(s[i])) {
      step = -step
      i = pairs[i]
    } else {
      res.push(ch)
    }
  }

  return res.join('')
}
