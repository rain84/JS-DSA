import { create, toArray } from '../utils/linked-list'
import { mergeTwoLists } from './0021-mergeTwoLists'

it.each(
	// prettier-ignore
	[
		[
			[1, 2, 4],
			[1, 3, 4],
			[1, 1, 2, 3, 4, 4],
		],
		// [[], [], []],
		// [[], [0], [0]],
		[[1], [2], [1, 2]],
		[[2], [1], [1, 2]],
		[
			[1, 3, 5],
			[2, 4, 6],
			[1, 2, 3, 4, 5, 6],
		],
		[
			[1, 1, 1],
			[1, 1, 1],
			[1, 1, 1, 1, 1, 1],
		],
		[[5], [1, 2, 3, 4], [1, 2, 3, 4, 5]],
		[[1, 2, 3, 4], [5], [1, 2, 3, 4, 5]],
	],
)('should merge %p and %p into %p', (l1, l2, expected) => {
	const list1 = create(l1)
	const list2 = create(l2)
	const merged = mergeTwoLists(list1, list2)
	expect(toArray(merged)).toEqual(expected)
})
