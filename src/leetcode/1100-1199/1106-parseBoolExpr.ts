/**
 * {@link https://leetcode.com/problems/parsing-a-boolean-expression | 1106. Parsing A Boolean Expression}
 *
 * Topics: String | Stack | Recursion
 */
export function parseBoolExpr(expression: string): boolean {
  const regex = /^([\&\|\!])\((.*)\)$/

  const dfs = (s: string, op = ''): boolean => {
    if (s === 't') return true
    if (s === 'f') return false

    const res = expression.match(regex)

    if (res) {
      ;[, op, s] = res
      return dfs(s, op)
    }

    const arr = s.split(',').map((x) => dfs(x))
    if (arr.length === 1) return op === '!' ? !arr[0] : arr[0]

    if (op === '&') return arr.every((x) => x)

    return arr.some((x) => !x)
  }

  return dfs(expression)
}

// "&(|(f))"

// const regex = /^([\&\|\!])\((.*)\)$/
// console.log(regex.exec('|(&(f,t))'))
// console.log(regex.exec('|(f,f,f,t)'))
