/**
 * {@link https://leetcode.com/problems/uncommon-words-from-two-sentences/ | 884. Uncommon Words from Two Sentences}
 *
 * Topics: Hash Table | String | Counting
 */
export function uncommonFromSentences(s1: string, s2: string): string[] {
  const arr = [...s1.split(' '), ...s2.split(' ')]
  const hash = new Map<string, number>()
  const res: string[] = []

  for (const s of arr) {
    hash.set(s, (hash.get(s) ?? 0) + 1)
  }

  for (const [s, c] of hash) {
    if (c === 1) res.push(s)
  }

  return res
}
