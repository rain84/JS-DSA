/**
 * 709. To Lower Case
 * {@link https://leetcode.com/problems/to-lower-case/ | Link}
 *
 * Topics: String
 *
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
 */
export function toLowerCase(s: string): string {
	const res: string[] = []

	for (const ch of s) {
		const code = ch.charCodeAt(0)
		if (code >= 65 && code <= 90) {
			res.push(String.fromCharCode(code + 32))
		} else {
			res.push(ch)
		}
	}

	return res.join('')
}
