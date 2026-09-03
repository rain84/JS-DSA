import { duplicateZeros } from './1089-duplicateZeros'

it.each(
	// prettier-ignore
	[
		[
			[1, 0, 2, 3, 0, 4, 5, 0],
			[1, 0, 0, 2, 3, 0, 0, 4],
		],
		[
			[1, 2, 3],
			[1, 2, 3],
		],
		[
			[0, 0, 0],
			[0, 0, 0],
		],
		[
			[0, 1, 0, 2],
			[0, 0, 1, 0],
		],
		[
			[1, 0, 0, 2],
			[1, 0, 0, 0],
		],
		[[0], [0]],
		[[1], [1]],
		[
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 1],
		],
	],
)('duplicateZeros(%p) = %p', (input, expected) => {
	const arr = [...input]
	duplicateZeros(arr)
	expect(arr).toEqual(expected)
})
