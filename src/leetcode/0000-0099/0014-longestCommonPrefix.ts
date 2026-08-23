/**
 * 14. Longest Common Prefix
 * {@link https://leetcode.com/problems/longest-common-prefix/ | Link}
 *
 * Topics: String, Vertical scanning
 */
export function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 0) return ''
	const prefix = strs[0]

	for (let i = 0; i < prefix.length; i++) {
		const ch = prefix[i]

		for (let j = 1; j < strs.length; j++) {
			if (ch !== strs[j][i]) {
				return prefix.slice(0, i)
			}
		}
	}

	return prefix
}
