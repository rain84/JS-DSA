import { findMissingN } from './find-missing-n'

it('should work 1', () => {
	expect(findMissingN([1, 2, 4])).toBe(3)
})

it('should work 2', () => {
	expect(findMissingN([1, 2, 3, 5, 6, 7, 8, 9])).toBe(4)
})
