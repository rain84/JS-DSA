import { flatten } from './flatten'

it.each(
	// prettier-ignore
	[
		[
			[1, 2, 3],
			[1, 2, 3],
		],
		[
			[1, [2, 3]],
			[1, 2, 3],
		],
		[
			[1, [2, [3, 4]]],
			[1, 2, 3, 4],
		],
		[
			[[1, 2], [[3]], [4, 5]],
			[1, 2, 3, 4, 5],
		],
		[[], []],
		[[[[1]]], [1]],
	],
)('flatten(%p) = %p', (input, expected) => {
	expect(flatten(input)).toEqual(expected)
})

it('respects depth', () => {
	expect(flatten([1, [2, [3, [4]]]], 1)).toEqual([1, 2, [3, [4]]])
	expect(flatten([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]])
	expect(flatten([1, [2, [3]]], 0)).toEqual([1, [2, [3]]])
})
