//  https://practice.geeksforgeeks.org/problems/max-sum-path-in-two-arrays/0

export const max_path_sum = (a, b) => {
	const i = { a: 0, b: 0 }
	const sum = { a: 0, b: 0 }
	let result = 0

	while (i.a < a.length || i.b < b.length) {
		if (a[i.a] === b[i.b]) {
			sum.a += a[i.a++]
			sum.b += b[i.b++]
			result += Math.max(sum.a, sum.b)
			sum.a = sum.b = 0
		} else if (a[i.a] < b[i.b] || b[i.b] === undefined) {
			sum.a += a[i.a++]
		} else if ([i.b] < a[i.a] || a[i.a] === undefined) {
			sum.b += b[i.b++]
		}
	}
	result += Math.max(sum.a, sum.b)

	return result
}
