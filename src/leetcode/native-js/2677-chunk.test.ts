import { chunk } from './2677-chunk'

it('should work 1', () => {
	const input = [1, 2, 3, 4, 5]
	const size = 1
	const output = [[1], [2], [3], [4], [5]]
	expect(chunk(input, size)).toMatchObject(output)
})

it('should work 2', () => {
	const input = [1, 9, 6, 3, 2]
	const size = 3
	const output = [
		[1, 9, 6],
		[3, 2],
	]
	expect(chunk(input, size)).toMatchObject(output)
})

it('should work 3', () => {
	const input = [8, 5, 3, 2, 6]
	const size = 6
	const output = [[8, 5, 3, 2, 6]]
	expect(chunk(input, size)).toMatchObject(output)
})

it('should work 1', () => {
	const input: number[] = []
	const size = 0
	const output: number[] = []
	expect(chunk(input, size)).toMatchObject(output)
})
