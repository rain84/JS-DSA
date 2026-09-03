import { arraySign } from './1822-arraySign'

it.each(
	// prettier-ignore
	[
		[[-1, -2, -3, -4, 3, 2, 1], 1],
		[[1, 5, 0, 2, -3], 0],
		[[-1, 1, -1, 1, -1], -1],
		[[1], 1],
		[[-1], -1],
		[[0], 0],
		[[1, 2, 3], 1],
		[[-1, -1], 1],
		[[-1, -1, -1], -1],
		[[0, 0, 0], 0],
	],
)('arraySign(%p) = %i', (nums, expected) => {
	expect(arraySign(nums)).toBe(expected)
})
