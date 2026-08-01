import { run, getTriplet } from './triplet'

// get subarrays with sum
it('should work', () => {
	const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const result = run(input, 10, 2)

	expect((result as number[][]).length).toBe(4)
	expect(result).toEqual([
		[1, 9],
		[2, 8],
		[3, 7],
		[4, 6],
	])
})
