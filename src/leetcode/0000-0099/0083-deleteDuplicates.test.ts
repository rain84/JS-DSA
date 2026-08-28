import { create, toArray } from '../utils/linked-list'
import { deleteDuplicates } from './0083-deleteDuplicates'

it.each(
	// prettier-ignore
	[
		[[1, 1, 2], [1, 2]],
		[[1, 1, 2, 3, 3], [1, 2, 3]],
		[[1, 1, 1], [1]],
		[[1, 2, 3], [1, 2, 3]],
		[[1], [1]],
		[[1, 1], [1]],
		[[1, 2, 2, 3, 3, 3], [1, 2, 3]],
	],
)('deleteDuplicates(%p) = %p', (input, expected) => {
	const head = create(input)
	const result = deleteDuplicates(head)
	expect(toArray(result)).toEqual(expected)
})

it('deleteDuplicates(null) = null', () => {
	expect(deleteDuplicates(null)).toBeNull()
})