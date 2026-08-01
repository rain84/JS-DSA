export const getDigit = (num: number, position: number) =>
	~~(Math.abs(num) / 10 ** (position - 1)) % 10

export const getLength = (num: number) => (num === 0 ? 1 : ~~Math.log10(Math.abs(num)) + 1)

export const random = (max = 0, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

/** Transpose matrix */
export const transpose = <T>(matrix: T[][]): T[][] => {
	const [m, n] = [matrix.length, matrix[0].length]
	const res = Array.from({ length: n }, () => Array<T>(m))

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			res[i][j] = matrix[j][i]
		}
	}

	return res
}

export const getPrimes = (n: number) => {
	const res: number[] = []
	let i = 2

	while (res.length < n) {
		let ok = true
		for (const x of res) {
			if (i % x === 0) {
				ok = false
				break
			}
		}
		if (ok) res.push(i)
		i++
	}

	return res
}
