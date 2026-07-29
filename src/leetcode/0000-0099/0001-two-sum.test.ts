import { twoSum } from './0001-two-sum'

describe('Leetcode: Two-sum', () => {
	it('should work', () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
		expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
	})
})
