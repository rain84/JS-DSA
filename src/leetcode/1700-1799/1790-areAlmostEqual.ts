/**
 * {@link https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal | 1790. Check if One String Swap Can Make Strings Equal}
 *
 * Topics: Hash Table | String | Counting
 */
export function areAlmostEqual(s1: string, s2: string): boolean {
  const n = s1.length
  let c = 0

  for (let i = 0, j = -1; i < n; i++) {
    if (s1[i] === s2[i]) c++
    else if (j === -1) j = i
    else if (s1[i] !== s2[j] || s1[j] !== s2[i]) return false
  }

  return c === n || c === n - 2
}
