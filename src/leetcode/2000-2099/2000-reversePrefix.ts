/**
 * 2000. Reverse Prefix of Word
 * {@link https://leetcode.com/problems/reverse-prefix-of-word/ | Link}
 */
export function reversePrefix(word: string, ch: string): string {
  const i = word.indexOf(ch) + 1
  if (!i) return word

  return [...word].slice(0, i).reverse().join('') + word.slice(i)
}
