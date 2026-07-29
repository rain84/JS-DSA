/**
 * {@link https://leetcode.com/problems/separate-black-and-white-balls | 2938. Separate Black and White Balls}
 *
 * Topics: Two Pointers | String | Greedy
 */
export function minimumSteps(s: string): number {
  let [res, c] = [0, 0]

  for (let i = s.length - 1; ~i; i--) {
    if (s[i] === '0') c++
    else res += c
  }

  return res
}

/** One-Liner */
export const minimumSteps2 = (s: string, res = 0, c = 0, n = s.length): number => (
  Array.from({ length: n }, (_, i) => (+s[n - i - 1] ? (res += c) : c++)), res
)

/** One-Liner */
export const minimumSteps3 = (s: string, z = 0, r = 0): number => (
  [...s].map((c, i) => +c || (r += i - z++)), r
)
