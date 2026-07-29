/**
 * 17. Letter Combinations of a Phone Number
 * {@link https://leetcode.com/problems/letter-combinations-of-a-phone-number/ | Link}
 */
export function letterCombinations(digits: string): string[] {
  if (!digits) return []

  const res: string[] = []
  const n = digits.length
  const d: string[][] = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'].map((x) => [
    ...x,
  ])

  const dfs = (curr: string, start: number) => {
    if (curr.length === n) {
      res.push(curr)
      return
    }

    for (let i = start; i < n; i++) {
      for (const ch of d[+digits[i] - 2]) {
        dfs(curr + ch, i + 1)
      }
    }
  }

  dfs('', 0)

  return res
}
