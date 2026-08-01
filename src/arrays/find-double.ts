/**
 * Practical usage of the XOR operator
 *
 * You are given an array A of n + 1 integers which are in the range between 1 and n.
 * All numbers appear exactly once, except one number, which is duplicated.
 * Find this duplicated number.
 *
 * {@link https://florian.github.io/xor-trick/ | xor-trick}
 */
export const findDouble = (arr: number[]) => {
	let res = arr.reduce((acc, val) => (acc ^= val))

	for (let i = 1; i < arr.length; i++) {
		res ^= i
	}

	return res
}
