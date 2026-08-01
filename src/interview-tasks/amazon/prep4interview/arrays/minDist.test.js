import { minDist } from './minDist'

describe('Minimum distance between two numbers', () => {
	it('should work', () => {
		expect(minDist([1, 2, 3, 2], 4, 1, 2)).toBe(1)
		expect(minDist([86, 39, 90, 67, 84, 66, 62], 7, 42, 12)).toBe(-1)
	})
})
