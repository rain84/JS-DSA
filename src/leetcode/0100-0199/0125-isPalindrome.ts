export function isPalindrome(s: string): boolean {
	const regex = /[^a-z0-9]/g
	s = s.toLocaleLowerCase().replaceAll(regex, '')
	const [n, m] = [s.length, Math.floor(s.length / 2)]

	for (let i = 0; i < m; i++) {
		if (s[i] !== s[n - i - 1]) {
			return false
		}
	}

	return true
}
