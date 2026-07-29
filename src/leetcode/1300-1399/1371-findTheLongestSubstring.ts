/**
 * {@link https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/ | 1371. Find the Longest Substring Containing Vowels in Even Counts}
 *
 * Topics: Hash Table | String | Bit Manipulation | Prefix Sum
 */
export function findTheLongestSubstring(s: string): number {
  const vowels: Record<string, number> = {
    a: 0b00001,
    e: 0b00010,
    i: 0b00100,
    o: 0b01000,
    u: 0b10000,
  }
  const counts: number[] = []
  let mask = 0b00000

  for (const x of s) {
    if (x in vowels) {
      mask ^= vowels[x]
    }

    counts.push(mask)
  }

  counts

  return 0
}

console.log(findTheLongestSubstring('leetcodegreat'))
// console.log(findTheLongestSubstring('eleetminicoworoep'))
