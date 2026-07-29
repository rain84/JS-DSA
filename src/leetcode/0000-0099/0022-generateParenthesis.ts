/**
 * 22. Generate Parentheses
 * {@link https://leetcode.com/problems/generate-parentheses/ | Link}
 */
export function generateParenthesis(n: number): string[] {
  if (n === 1) return ['()']

  return [
    ...new Set(
      generateParenthesis(n - 1).flatMap((s) =>
        Array.from(s, (_, i) => s.slice(0, i) + '()' + s.slice(i))
      )
    ),
  ]
}

export function generateParenthesis2(n: number): string[] {
  const res: string[] = []

  const dfs = (s: string, l: number, r: number) => {
    if (!l && !r) {
      res.push(s)
      return
    }

    if (l) dfs(s + '(', l - 1, r)
    if (r > l) dfs(s + ')', l, r - 1)
  }

  dfs('', n, n)

  return res
}
