/**
 * 459. Repeated Substring Pattern
 * {@link https://leetcode.com/problems/repeated-substring-pattern/ | Link}
 *
 * Topics: String | String Matching
 *
 * Given a string s, check if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.
 */
export function repeatedSubstringPattern(s: string): boolean {
	return (s + s).slice(1, -1).includes(s)
}
