import { isMonotonic } from './0896-isMonotonic'

it.each(
	// prettier-ignore
	[
		[[1, 2, 2, 3], true],
		[[6, 5, 4, 4], true],
		[[1, 3, 2], false],
		[[1], true],
		[[1, 1, 1], true],
		[[1, 2, 3, 4, 5], true],
		[[5, 4, 3, 2, 1], true],
		[[1, 1, 2, 1], false],
		[[3, 3, 2, 1], true],
		[[1, 3, 2, 4], false],
		[[], true],
	],
)('isMonotonic(%p) = %s', (nums, expected) => {
	expect(isMonotonic(nums)).toBe(expected)
})
