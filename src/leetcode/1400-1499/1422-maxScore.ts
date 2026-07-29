/**
 * {@linkhttps://leetcode.com/problems/maximum-score-after-splitting-a-string | 1422. Maximum Score After Splitting a String}
 *
 * TopicsЖ String | Prefix Sum
 */
export function maxScore(s: string): number {
  const n = s.length
  let [l, r] = [0, [...s].reduce((a, b) => a + +b, 0)]
  let res = 0

  for (let i = 0; i < n - 1; i++) {
    if (+s[i]) r--
    else l++
    res = Math.max(res, l + r)
  }

  return res
}
