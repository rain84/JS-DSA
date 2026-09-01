/**
 * 242. Valid Anagram
 * {@link https://leetcode.com/problems/valid-anagram/ | Link}
 *
 * Topics: Hash Table | String | Sorting
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */
export function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false

	const charCodeA = 'a'.charCodeAt(0)
	const cnt = Array(26).fill(0)

	for (let i = 0; i < s.length; i++) {
		cnt[s[i].charCodeAt(0) - charCodeA]++
		cnt[t[i].charCodeAt(0) - charCodeA]--
	}

	return cnt.every((x) => x === 0)
}
