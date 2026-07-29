/**
 * {@link https://leetcode.com/problems/different-ways-to-add-parentheses/ | 241. Different Ways to Add Parentheses}
 *
 * Topics: Math | String | Dynamic Programming | Recursion | Memoization
 */
export function diffWaysToCompute(expression: string): number[] {
  const cache = new Map<string, number[]>()
  const operators = new Set(['+', '-', '*'])

  const dfs = (exp: string): number[] => {
    if (!exp) return []
    if (cache.has(exp)) return cache.get(exp)!
    if (Number.isInteger(+exp)) return [+exp]

    const res: number[] = []
    const n = exp.length

    for (let i = 0; i < n; i++) {
      const ch = exp[i]
      if (!operators.has(ch)) continue

      const [left, right] = [dfs(exp.slice(0, i)), dfs(exp.slice(i + 1))]
      for (const x of left) {
        for (const y of right) {
          if (ch === '+') res.push(x + y)
          if (ch === '-') res.push(x - y)
          if (ch === '*') res.push(x * y)
        }
      }
    }

    cache.set(exp, res)

    return res
  }

  return dfs(expression)
}
