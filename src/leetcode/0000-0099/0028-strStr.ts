/**
 * 28. Find the Index of the First Occurrence in a String
 * {@link https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ | Link}
 *
 * Topics: Two Pointers | String | String Matching
 */
export function strStr(haystack: string, needle: string): number {
	if (!haystack.length && !needle.length) return 0
	const m = haystack.length
	const n = needle.length

	for (let i = 0; i <= m - n; i++) {
		let match = true

		for (let j = 0; j < n; j++) {
			if (haystack[i + j] !== needle[j]) {
				match = false
				break
			}
		}

		if (match) {
			return i
		}
	}

	return -1
}
