import { kLargest, thirdLargest } from './kLargest'

it('thirdLargest should work', () => {
	expect(thirdLargest([2, 4, 1, 3, 5], 5)).toBe(3)
	expect(thirdLargest([5, 6, 10], 3)).toBe(5)
	expect(thirdLargest([2, 4, 1, 3, 5, 6, 10], 7)).toBe(5)
	expect(thirdLargest([10, 2], 2)).toBe(-1)
})

it('kLargest should work', () => {
	// [1, 1, 2, 3, 4, 5, 6, 32]
	//  8  7  6  5  4  3  2  1
	expect(kLargest([2, 4, 1, 3, 5, 1, 32, 6], 5)).toBe(3)
	expect(kLargest([2, 4, 1, 3, 5, 1, 32, 6], 8)).toBe(1)
	expect(kLargest([2, 4, 1, 3, 5, 1, 32, 6], 1)).toBe(32)
})
