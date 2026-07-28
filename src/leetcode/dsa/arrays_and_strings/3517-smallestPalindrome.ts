/**
 * {@link https://leetcode.com/problems/smallest-palindromic-rearrangement-i/ | 3517. Smallest Palindromic Rearrangement I}
 *
 * Topics: Senior | String | Sorting | Counting Sort
 */

export function smallestPalindrome(s: string): string {
	const idxMiddle = ~~(s.length / 2)
	const str = s.slice(0, idxMiddle)
	const middle = s.length % 2 ? s[idxMiddle] : ''
	const cnt: Record<string, number> = {}

	for (const ch of str) {
		cnt[ch] = (cnt[ch] ?? 0) + 1
	}

	const bucket = Array(26).fill('')
	for (const [ch, c] of Object.entries(cnt)) {
		bucket[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = ch.repeat(c)
	}

	return bucket.join('') + middle + bucket.reverse().join('')
}
