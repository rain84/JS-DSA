import { thirdMax } from './0414-thirdMax'

it.each(
	// prettier-ignore
	[
		[[3, 2, 1], 1],
		[[1, 2], 2],
		[[2, 2, 3, 1], 1],
		[[1, 2, 2, 5, 3, 5], 2],
		[[1], 1],
		[[2, 2, 2], 2],
		[[5, 2, 4, 1, 3, 6, 0], 4],
		[[1, 2, -2147483648], -2147483648],
		[[2, 2, 3, 1], 1], // duplicate case from tmp
	],
)('thirdMax(%p) = %i', (nums, expected) => {
	expect(thirdMax(nums)).toBe(expected)
})