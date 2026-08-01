import { getIndex } from './getIndex'

it('should find index in sorted array where target should be inserted', () => {
	expect(getIndex([1, 5, 8, 12], 12)).toBe(4)
	expect(getIndex([3, 4, 7, 12, 29], 5)).toBe(2)
	expect(getIndex([3, 4, 7, 12, 29], 17)).toBe(4)
	expect(getIndex([3, 4, 7, 12, 29], -17)).toBe(0)
	expect(getIndex([3, 4, 7, 12, 29], 9)).toBe(3)
	expect(getIndex([3, 4, 7, 12, 29], 10)).toBe(3)
	expect(getIndex([3, 4, 7, 12, 29], 10.99)).toBe(3)
	expect(getIndex([3, 4, 7, 12, 29], 12.01)).toBe(4)
	expect(getIndex([3, 4, 7, 12, 29], Number.POSITIVE_INFINITY)).toBe(5)
})
