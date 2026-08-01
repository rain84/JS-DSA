export const lowBitIndex = (x: number) => {
	if (!x) return -1

	let c = 1
	while ((x & ((1 << c) - 1)) === 0) c++

	return c - 1
}
