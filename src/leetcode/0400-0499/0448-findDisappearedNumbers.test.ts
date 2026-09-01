import { findDisappearedNumbers, findDisappearedNumbers2 } from './0448-findDisappearedNumbers'

it.each(
	// prettier-ignore
	[
		[
			[4, 3, 2, 7, 8, 2, 3, 1],
			[5, 6],
		],
		[[1, 1], [2]],
		[[1, 2, 3], []],
		[[2, 2], [1]],
		[[1], []],
		[[2, 3, 4, 5, 5], [1]],
		[
			[1, 1, 2, 2],
			[3, 4],
		],
	],
)('findDisappearedNumbers(%p) = %p', (nums, expected) => {
	expect(findDisappearedNumbers([...nums])).toEqual(expected)
	expect(findDisappearedNumbers2([...nums])).toEqual(expected)
})
