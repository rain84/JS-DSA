type LR = [number, number]

const f = (l: number, n: number) => (l + n) % 256

export const encode = (l: number, r: number): LR => {
	const rounds = 3
	let i = 0

	while (i++ <= rounds) {
		const tmp = r ^ f(l, i)
		r = l
		l = tmp
	}

	// r = r ^ f(l, 0)

	return [l, r]
}

encode(100, 200)
