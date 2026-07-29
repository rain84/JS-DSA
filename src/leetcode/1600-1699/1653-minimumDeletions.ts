/**
 * 1653. Minimum Deletions to Make String Balanced
 * {@link https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/ | Link}
 *
 * Topics:  String | Dynamic Programming | Stack
 */

/** Stack */
export function minimumDeletions(s: string): number {
  const stk: string[] = []
  let res = 0

  for (const ch of s) {
    if (stk.at(-1) === 'b' && ch === 'a') {
      stk.pop()
      res++
    } else stk.push(ch)
  }

  return res
}

/** Dynamic Programming, with tabulation in 'f' array */
export function minimumDeletions2(s: string): number {
  const n = s.length
  const f = Array(n + 1).fill(0)

  for (let i = 1, bCount = 0; i <= n; i++) {
    if (s[i - 1] === 'b') {
      bCount++
      f[i] = f[i - 1]
    } else {
      f[i] = Math.min(f[i - 1] + 1, bCount)
    }
  }

  return f[n]
}

/** Dynamic Programming, optimized space complexity */
export function minimumDeletions3(s: string): number {
  const n = s.length
  let f = 0

  for (let i = 0, bCount = 0; i < n; i++) {
    const ch = s[i]

    if (ch === 'b') {
      bCount++
    } else {
      f = Math.min(f + 1, bCount)
    }
  }

  return f
}

/** Three-Pass Count Method */
export function minimumDeletions4(s: string): number {
  let n = s.length
  const aCount = Array(n).fill(0)
  const bCount = Array(n).fill(0)

  for (let i = 0, c = 0; i < n; i++) {
    bCount[i] = c
    if (s[i] === 'b') c++
  }

  for (let i = n - 1, c = 0; i >= 0; i--) {
    aCount[i] = c
    if (s[i] === 'a') c++
  }

  let res = Number.POSITIVE_INFINITY
  while (n--) res = Math.min(res, aCount[n] + bCount[n])

  return res
}

/** Combined Pass Method */
export function minimumDeletions5(s: string): number {
  const n = s.length
  const aCount = Array(n).fill(0)

  for (let i = n - 1, c = 0; i >= 0; i--) {
    aCount[i] = c
    if (s[i] === 'a') c++
  }

  let res = Number.POSITIVE_INFINITY
  for (let i = 0, c = 0; i < n; i++) {
    res = Math.min(res, aCount[i] + c)

    if (s[i] === 'b') c++
  }

  return res
}

/** Two-Variable Method */
export function minimumDeletions6(s: string): number {
  let a = [...s].reduce((acc, x) => (x === 'a' ? acc + 1 : acc), 0)
  let b = 0

  let res = Number.POSITIVE_INFINITY
  for (const ch of s) {
    if (ch === 'a') a--
    res = Math.min(res, a + b)
    if (ch === 'b') b++
  }

  return res
}
