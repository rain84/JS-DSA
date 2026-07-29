/**
 * 2486. Append Characters to String to Make Subsequence
 * {@link https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/ | Link}
 */
export function appendCharacters(s: string, t: string): number {
  let j = 0

  for (const ch of s) {
    if (ch === t[j]) j++
  }

  return t.length - j
}
