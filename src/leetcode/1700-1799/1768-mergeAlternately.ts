/**
 * 1768. Merge Strings Alternately
 * {@link https://leetcode.com/problems/merge-strings-alternately/ | Link}
 *
 * Topics: Two Pointers | String
 *
 * You are given two strings word1 and word2.
 * Merge the strings by adding letters in alternating order, starting with word1.
 * If a string is longer than the other, append the additional letters onto the end of the merged string.
 * Return the merged string.
 */
export function mergeAlternately(word1: string, word2: string): string {
	const n = Math.max(word1.length, word2.length)
	const res: string[] = []

	for (let i = 0; i < n; i++) {
		if (word1[i]) res.push(word1[i])
		if (word2[i]) res.push(word2[i])
	}

	return res.join('')
}
