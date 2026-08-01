import { isPowerOf2 } from './is-power-of-2'

it.each(
	//  prettier-ignore
	[
		[[0, 1, 2, 4, 8, 16, 32], true],
		[
			[
				3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
				30, 31,
			],
			false,
		],
	],
)('should work %#', (input, output) => {
	expect(input.map(isPowerOf2).every((x) => x === output)).toBeTruthy()
})
