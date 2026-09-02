import { diagonalSum } from './1572-diagonalSum'

it.each(
	// prettier-ignore
	[
		[[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 25],
		[[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], 8],
		[[[5]], 5],
		[[[1, 2], [3, 4]], 10],
	],
)('diagonalSum(%p) = %i', (mat, expected) => {
	expect(diagonalSum(mat)).toBe(expected)
})