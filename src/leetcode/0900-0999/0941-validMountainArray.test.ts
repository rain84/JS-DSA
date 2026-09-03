import { validMountainArray } from './0941-validMountainArray'

it.each(
	// prettier-ignore
	[
		[[2, 1], false], // too short
		[[3, 5, 5], false], // flat peak
		[[0, 3, 2, 1], true], // valid
		[[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], false], // strictly increasing
		[[9, 8, 7, 6, 5, 4, 3, 2, 1, 0], false], // strictly decreasing
		[[1, 2, 3, 2, 1], true], // valid
		[[1, 2, 3, 3, 2, 1], false], // flat peak
		[[1, 3, 2], true], // minimal valid
		[[1, 2, 1], true], // minimal valid
		[[0, 2, 3, 3, 5, 2, 1, 0], false], // flat in ascent
		[[0, 2, 3, 5, 4, 2, 1, 0], true], // valid longer
		[
			[
				14, 82, 89, 84, 79, 70, 70, 68, 67, 66, 63, 60, 58, 54, 44, 43, 32, 28, 26, 25, 22, 18, 17,
				12, 10, 8, 7, 5, 4, 3, 2,
			],
			false,
		], // flat in descent
	],
)('validMountainArray(%p) = %s', (arr, expected) => {
	expect(validMountainArray(arr)).toBe(expected)
})
