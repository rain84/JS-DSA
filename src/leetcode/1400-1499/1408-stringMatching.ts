/**
 * {@link https://leetcode.com/problems/string-matching-in-an-array | 1408. String Matching in an Array}
 *
 * Topics: Array | String | String Matching
 */
export function stringMatching(words: string[]): string[] {
  const res: string[] = []

  for (const s of words) {
    if (words.some((w) => w !== s && w.includes(s))) {
      res.push(s)
    }
  }

  return res
}
