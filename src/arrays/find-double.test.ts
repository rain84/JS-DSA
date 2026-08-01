import { findDouble } from './find-double'

it('should work 1', () => {
	expect(findDouble([1, 2, 3, 4, 4, 5])).toBe(4)
})

it('should work 2', () => {
	expect(findDouble([1, 1, 2, 3, 4, 5])).toBe(1)
})
