import { rotateArr } from './rotateArr'

it('should work', () => {
	expect(rotateArr([1, 2, 3, 4, 5], 2, 5)).toEqual([3, 4, 5, 1, 2])
	expect(rotateArr([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3, 10)).toEqual([
		8, 10, 12, 14, 16, 18, 20, 2, 4, 6,
	])
})
