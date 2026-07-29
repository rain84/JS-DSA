/**
 * {@link https://leetcode.com/problems/count-vowel-strings-in-ranges | 2559. Count Vowel Strings in Ranges}
 *
 * Topics: Array | String | Prefix Sum
 */
export function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const prefix = Array(words.length + 1).fill(0)

  words.forEach((w, i) => {
    const x = +(vowels.has(w[0]) && vowels.has(w.at(-1)!))
    prefix[i + 1] = prefix[i] + x
  })

  return queries.map(([l, r]) => prefix[r + 1] - prefix[l])
}
