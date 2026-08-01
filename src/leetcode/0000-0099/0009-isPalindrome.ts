/**
 * {@link https://leetcode.com/problems/palindrome-number/ | 9. Palindrome Number
}
 *
 * Topics: Math
 */

export function isPalindrome(x: number): boolean {
	const str1 = String(x)
	const str2 = [...str1].reverse().join('').toString()

	return str1 === str2
}

export function isPalindrome2(x: number): boolean {
	const str = String(x)
	const n = str.length
	const end = Math.floor(n / 2)

	for (let i = 0; i < end; i++) {
		if (str[i] !== str[n - i - 1]) {
			return false
		}
	}

	return true
}
