import { moveZeroes } from './0283-moveZeroes'

it.each(
	// prettier-ignore
	[
		[[0, 1, 0, 3, 12], [1, 3, 12, 0, 0]],
		[[0], [0]],
		[[1, 2, 3], [1, 2, 3]],
		[[0, 0, 0], [0, 0, 0]],
		[[1, 0, 2, 0, 3], [1, 2, 3, 0, 0]],
		[[4, 2, 4, 0, 0, 3, 0, 5, 1, 0], [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]],
		[[1, 0], [1, 0]],
		[[0, 1], [1, 0]],
		[[1, 0, 1], [1, 1, 0]],
		[[], []],
	],
)('moveZeroes(%p) = %p', (input, expected) => {
	const arr = [...input]
	moveZeroes(arr)
	expect(arr).toEqual(expected)
})