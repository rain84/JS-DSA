/**
 * 1456. Maximum Number of Vowels in a Substring of Given Length
 * {@link https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/ | Link}
 */
export function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let l = 0
  let r = 0
  let count = 0
  const n = s.length

  while (r < k) if (vowels.has(s[r++])) count++
  let res = count

  while (r < n) {
    if (vowels.has(s[r++])) count++
    if (vowels.has(s[l++])) count--
    res = Math.max(res, count)
  }

  return res
}
