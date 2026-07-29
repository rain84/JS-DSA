/**
 * {@link https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n | 1415. The k-th Lexicographical String of All Happy Strings of Length n}
 *
 * Topics: String | Backtracking
 */
export function getHappyString(n: number, k: number): string {
  let res = ''

  const dfs = (s = '') => {
    if (res || s.length === n) {
      if (--k === 0) res = s
      return
    }

    for (const ch of 'abc') {
      if (s.at(-1) === ch) continue
      dfs(s + ch)
    }
  }

  dfs()

  return res
}
