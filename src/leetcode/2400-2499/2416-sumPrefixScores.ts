/**
 * {@link https://leetcode.com/problems/sum-of-prefix-scores-of-strings/ | 2416. Sum of Prefix Scores of Strings}
 *
 * Topics: Array | String | Trie | Counting
 */

/** Trie-DS */
export function sumPrefixScores(words: string[]): number[] {
  const n = words.length
  const res = Array(n).fill(0)
  const trie = new Trie()

  for (const word of words) {
    let node = trie

    for (const ch of word) {
      node.children[ch] ??= new Trie()
      node.children[ch].count++
      node = node.children[ch]
    }
  }

  for (let i = 0; i < n; i++) {
    let node = trie
    for (const ch of words[i]) {
      node = node.children[ch]
      res[i] += node.count
    }
  }

  return res
}

class Trie {
  count = 0
  children: Record<string, Trie> = {}
}

/** Brute Force. TLE */
export function sumPrefixScores2(words: string[]): number[] {
  const n = words.length
  const res = Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    const word = words[i]

    let s = ''
    for (const ch of word) {
      s += ch

      for (const w of words) {
        if (w.startsWith(s)) {
          res[i]++
        }
      }
    }
  }

  return res
}
