/**
 * Practical usage of the XOR operator
 *
 * You are given an array of n - 1 integers which are in the range between 1 and n.
 * All numbers appear exactly once, except one number, which is missing.
 * Find this missing number.
 *
 * {@link https://florian.github.io/xor-trick/ | xor-trick}
 */
export const findMissingN = (arr: number[]) => {
	for (let i = 1; i <= arr.length; i++) {
		if (i ^ arr[i - 1]) return i
	}

	return -1
}

export const findMissingN2 = (arr: number[]) => {
	let res = arr[0]
	let i = 1

	while (i++ < arr.at(-1)!) res ^= i

	for (let i = 0; i < arr.length; i++) {
		res ^= arr[i]
	}

	return res
}
