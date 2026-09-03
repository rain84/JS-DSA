/**
 * 67. Add Binary
 * {@link https://leetcode.com/problems/add-binary/ | Link}
 *
 * Topics: String | Bit Manipulation | Simulation
 */
export function addBinary(a: string, b: string): string {
	if (!a && !b) return '0'
	let i = a.length - 1
	let j = b.length - 1
	let carry = 0
	const res: string[] = []

	while (i >= 0 || j >= 0 || carry) {
		const sum = carry + (i >= 0 ? +a[i--] : 0) + (j >= 0 ? +b[j--] : 0)
		res.push(String(sum & 1))
		carry = sum >> 1
	}

	return res.reverse().join('')
}

export function _addBinary(a: string, b: string): string {
	return (BigInt(`0b${a || '0'}`) + BigInt(`0b${b || '0'}`)).toString(2)
}
