/**
 * 58. Length of Last Word
 * {@link https://leetcode.com/problems/length-of-last-word/ | Link}
 *
 * Topics: String
 */
export function lengthOfLastWord(s: string): number {
	let [cnt, i] = [0, s.length - 1]

	while (i >= 0 && s[i] === ' ') i--
	while (i >= 0 && s[i] !== ' ') {
		i--
		cnt++
	}

	return cnt
}

export function _lengthOfLastWord(s: string): number {
	return s.trim().split(/\s+/).pop()?.length ?? 0
}
