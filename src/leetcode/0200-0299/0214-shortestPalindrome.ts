/**
 * {@link https://leetcode.com/problems/shortest-palindrome/ | 214. Shortest Palindrome}
 *
 * Topics: String | Rolling Hash | String Matching | Hash Function
 *
 * Brute Force
 */
export function shortestPalindrome(s: string): string {
  if (!s || s.length === 1) return s

  const isPalindrome = (s: string) => {
    let [i, j] = [0, s.length - 1]

    while (i <= j) {
      if (s[i++] !== s[j--]) return false
    }

    return true
  }

  const reverseString = [...s].reverse().join('')
  for (let i = 0; i < reverseString.length; i++) {
    const res = reverseString.slice(0, i) + s
    if (isPalindrome(res)) return res
  }

  return ''
}
