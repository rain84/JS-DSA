import { replaceElements } from './1299-replaceElements'

it.each(
	// prettier-ignore
	[
		[[17, 18, 5, 4, 6, 1], [18, 6, 6, 6, 1, -1]],
		[[400], [-1]],
		[[1, 2, 3, 4, 5], [5, 5, 5, 5, -1]],
		[[5, 4, 3, 2, 1], [4, 3, 2, 1, -1]],
		[[2, 2, 2, 2], [2, 2, 2, -1]],
		[[1, 1, 1], [1, 1, -1]],
		[[5, 4, 3, 2, 1, 0], [4, 3, 2, 1, 0, -1]],
		[[1, 3, 2, 4, 5], [5, 5, 5, 5, -1]],
		[[10, 9, 8, 7, 6], [9, 8, 7, 6, -1]],
	],
)('replaceElements(%p) = %p', (arr, expected) => {
	expect(replaceElements([...arr])).toEqual(expected)
})