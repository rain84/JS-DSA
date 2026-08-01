import { removeDuplicates } from './removeDuplicates'

it('should work', () => {
	const nums = [1, 1, 2]

	expect(removeDuplicates(nums)).toBe(2)
	expect(nums).toMatchObject([1, 2])
})
