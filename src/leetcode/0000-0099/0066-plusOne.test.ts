import { plusOne } from './0066-plusOne'

it.each(
	// prettier-ignore
	[
		[[1, 2, 3], [1, 2, 4]],
		[[4, 3, 2, 1], [4, 3, 2, 2]],
		[[9], [1, 0]],
		[[9, 9], [1, 0, 0]],
		[[9, 9, 9], [1, 0, 0, 0]],
		[[0], [1]],
		[[1, 0], [1, 1]],
		[[1, 9], [2, 0]],
		[[8, 9, 9], [9, 0, 0]],
		[[1, 2, 9], [1, 3, 0]],
	],
)('plusOne(%p) = %p', (digits, expected) => {
	expect(plusOne([...digits])).toEqual(expected)
})