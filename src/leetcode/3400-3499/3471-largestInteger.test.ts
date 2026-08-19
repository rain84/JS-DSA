import { largestInteger } from './3471-largestInteger'

describe('3471. Find the Largest Almost Missing Integer', () => {
	test('Example 1: Basic case with unique elements', () => {
		expect(largestInteger([3, 9, 2, 1, 7], 1)).toBe(9) // all unique, max is 9
	})

	test('Example 2: Mixed duplicates and unique', () => {
		expect(largestInteger([3, 9, 2, 1, 7, 9, 2], 1)).toBe(7) // unique: 3,1,7 → max 7
	})

	test('Example 3: No unique elements (all duplicates)', () => {
		expect(largestInteger([1, 1, 2, 2, 3, 3], 1)).toBe(-1) // no element appears once
	})

	test('Example 4: Single element', () => {
		expect(largestInteger([5], 1)).toBe(5)
	})

	test('Example 5: All same elements', () => {
		expect(largestInteger([4, 4, 4, 4], 1)).toBe(-1)
	})
})
