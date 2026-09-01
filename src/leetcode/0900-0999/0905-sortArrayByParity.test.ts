import { sortArrayByParity, sortArrayByParity2 } from './0905-sortArrayByParity'

function isValidParitySorted(arr: number[]): boolean {
	let seenOdd = false
	for (const x of arr) {
		if (x % 2 !== 0) seenOdd = true
		else if (seenOdd) return false
	}
	return true
}

it.each(
	// prettier-ignore
	[
		[[3, 1, 2, 4]],
		[[0]],
		[[1]],
		[[0, 1]],
		[[1, 0]],
		[[2, 4, 6]],
		[[1, 3, 5]],
		[[1, 2, 3, 4, 5, 6]],
		[[0, 1, 2]],
		[[0, 0, 1, 1]],
	],
)('sortArrayByParity(%p)', (input) => {
	let res = sortArrayByParity([...input])
	expect(isValidParitySorted(res)).toBe(true)
	expect(res).toHaveLength(input.length)
	expect([...res].sort((a, b) => a - b)).toEqual([...input].sort((a, b) => a - b))

	res = sortArrayByParity2([...input])
	expect(res).toHaveLength(input.length)
	expect([...res].sort((a, b) => a - b)).toEqual([...input].sort((a, b) => a - b))
})
