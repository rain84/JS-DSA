import { canMakeArithmeticProgression } from './1502-canMakeArithmeticProgression'

it.each(
	// prettier-ignore
	[
		[[3, 5, 1], true],
		[[1, 2, 4], false],
		[[1, 3, 5], true],
		[[1, 1, 1], true],
		[[1, 2], true],
		[[2, 4, 1], false],
		[[5, 5, 5, 5], true],
		[[0, 0, 0], true],
		[[-1, 0, 1], true],
		[[1, 10, 19], true],
		[[1, 10, 20], false],
	],
)('canMakeArithmeticProgression(%p) = %s', (arr, expected) => {
	expect(canMakeArithmeticProgression([...arr])).toBe(expected)
})
