/**
 * {@link https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence | 3455. Check If a Word Occurs As a Prefix of Any Word in a Sentence}
 *
 * Topics: Two Pointers | String | String Matching
 */
export function isPrefixOfWord(sentence: string, searchWord: string): number {
  const arr = sentence.split(' ')
  const n = arr.length

  for (let i = 0; i < n; i++) {
    if (arr[i].startsWith(searchWord)) {
      return i + 1
    }
  }

  return -1
}
