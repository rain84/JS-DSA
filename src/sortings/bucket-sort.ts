export const bucketSort = (s: string) => {
	const bucket1 = Array(26).fill(0)
	const bucket2 = Array(26).fill(0)
	const code_a = 'a'.charCodeAt(0)
	const code_A = 'A'.charCodeAt(0)

	for (const ch of s) {
		const code = ch.charCodeAt(0)

		if (code >= code_a) {
			bucket1[code - code_a]++
		} else {
			bucket2[code - code_A]++
		}
	}

	const res: string[] = []
	for (let i = 0; i < 26; i++) {
		res.push(String.fromCharCode(i + code_a).repeat(bucket1[i]))
		res.push(String.fromCharCode(i + code_A).repeat(bucket2[i]))
	}

	return res.join('')
}
