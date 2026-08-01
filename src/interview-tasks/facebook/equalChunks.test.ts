import { equalChunks, extractByIndexes, getChunkIndexes, type ResultType } from './equalChunks'

const helpers = {
	sum: (arr: number[]) => arr.reduce((a, b) => a + b),
	have3equalChunks: (arr: ResultType) =>
		arr.every((item) => helpers.sum(item) === helpers.sum(arr[0])),
}

it('should return null on empty array', () => {
	expect(typeof equalChunks).toBe('function')
	expect(equalChunks([], 0)).toBeNull()
})

it('should return null on array which can not be splitted', () => {
	const arr = [3, 5, 8, 0, 8, 0, 1]
	expect(equalChunks(arr, 3)).toBeNull()
})

it('should return null on array with huge values', () => {
	const arr = [22, 1, 1, 0]
	expect(equalChunks(arr, 3)).toBeNull()
})

it('it helpers', () => {
	const res: ResultType = [[3, 5], [8], [0, 8, 0]]
	expect(helpers.have3equalChunks(res)).toBeTruthy()
})

it('should return array of 3 equal chunks - 1', () => {
	const arr = [3, 5, 8, 0, 8, 0]

	const res = equalChunks(arr, 3)
	expect(helpers.have3equalChunks(res!)).toBeTruthy()
})

it('should return array of 3 equal chunks - 2', () => {
	const arr = [1, 3, 1, 2, 0, 1, 1]

	const res = equalChunks(arr, 3)
	expect(helpers.have3equalChunks(res as ResultType)).toBeTruthy()
})

describe('getChunkIndexes', () => {
	const sumOfIndexes = (arr: number[], indexes: number[]): number =>
		indexes.reduce((acc, idx) => acc + arr[idx], 0)

	it('sumOfIndexes should work', () => {
		expect(sumOfIndexes([7, 43, 123, 9, 23, 2], [0, 2, 4])).toBe(153)
		expect(sumOfIndexes([7, 43, 123, 9, 23, 2], [1, 3, 5])).toBe(54)
	})

	it('should return vals', () => {
		let arr = [1, 7, 4, 9, 4]
		expect(sumOfIndexes(arr, getChunkIndexes(arr, 10)!)).toEqual(10)
		expect(sumOfIndexes(arr, getChunkIndexes(arr, 13)!)).toEqual(13)

		arr = [1, 7, 234, 12, 4, 23, 9, 62, 4]
		expect(sumOfIndexes(arr, getChunkIndexes(arr, 97)!)).toEqual(97)
	})
})

it('splitArrByIndexes should work', () => {
	expect(extractByIndexes([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2])).toEqual({
		chunk: [0, 1, 2],
		restArray: [3, 4, 5, 6, 7, 8, 9],
	})

	expect(extractByIndexes([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [7, 9, 5, 2])).toEqual({
		chunk: [7, 9, 5, 2],
		restArray: [0, 1, 3, 4, 6, 8],
	})
})
