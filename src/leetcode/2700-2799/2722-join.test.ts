import { join } from './2722-join'

describe('joinTwoArraysById (LeetCode 2722)', () => {
	it('should merge objects with same id - Example 1 from LeetCode', () => {
		const arr1 = [
			{ id: 1, x: 1 },
			{ id: 2, x: 2 },
		]
		const arr2 = [
			{ id: 2, x: 3 },
			{ id: 3, x: 4 },
		]
		const expected = [
			{ id: 1, x: 1 },
			{ id: 2, x: 3 },
			{ id: 3, x: 4 },
		]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should merge objects with same id - Example 2 from LeetCode', () => {
		const arr1 = [
			{ id: 1, x: 2, y: 3 },
			{ id: 2, x: 3, y: 6 },
		]
		const arr2 = [
			{ id: 2, x: 10, y: 20 },
			{ id: 3, x: 0, y: 0 },
		]
		const expected = [
			{ id: 1, x: 2, y: 3 },
			{ id: 2, x: 10, y: 20 },
			{ id: 3, x: 0, y: 0 },
		]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should merge nested objects (arr2 overwrites arr1)', () => {
		const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
		const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]
		const expected = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should handle empty arrays', () => {
		expect(join([], [])).toEqual([])
	})

	it('should handle arr1 empty, arr2 non-empty', () => {
		const arr1: { id: number; x: number }[] = []
		const arr2 = [
			{ id: 1, x: 10 },
			{ id: 2, x: 20 },
		]
		const expected = [
			{ id: 1, x: 10 },
			{ id: 2, x: 20 },
		]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should handle arr2 empty, arr1 non-empty', () => {
		const arr1 = [
			{ id: 1, x: 10 },
			{ id: 2, x: 20 },
		]
		const arr2: { id: number; x: number }[] = []
		const expected = [
			{ id: 1, x: 10 },
			{ id: 2, x: 20 },
		]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should handle single element arrays', () => {
		const arr1 = [{ id: 1, name: 'Alice' }]
		const arr2 = [{ id: 1, age: 30 }]
		const expected = [{ id: 1, name: 'Alice', age: 30 }]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should handle arrays as values (arr2 overwrites arr1)', () => {
		const arr1 = [{ id: 1, tags: ['a', 'b'] }]
		const arr2 = [{ id: 1, tags: ['c', 'd'] }]
		const expected = [{ id: 1, tags: ['c', 'd'] }]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should preserve all unique properties from both arrays', () => {
		const arr1 = [{ id: 1, a: 1, b: 2 }]
		const arr2 = [{ id: 1, c: 3, d: 4 }]
		const expected = [{ id: 1, a: 1, b: 2, c: 3, d: 4 }]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should handle multiple overlapping IDs', () => {
		const arr1 = [
			{ id: 1, x: 1 },
			{ id: 2, x: 2 },
			{ id: 3, x: 3 },
		]
		const arr2 = [
			{ id: 2, y: 20 },
			{ id: 3, y: 30 },
			{ id: 4, y: 40 },
		]
		const expected = [
			{ id: 1, x: 1 },
			{ id: 2, x: 2, y: 20 },
			{ id: 3, x: 3, y: 30 },
			{ id: 4, y: 40 },
		]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should handle null and boolean values', () => {
		const arr1 = [{ id: 1, active: true, data: null }]
		const arr2 = [{ id: 1, active: false, count: 5 }]
		const expected = [{ id: 1, active: false, data: null, count: 5 }]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should handle string and number ids (numeric ids as per problem)', () => {
		const arr1 = [{ id: 1, val: 'first' }]
		const arr2 = [{ id: 1, val: 'second' }]
		const expected = [{ id: 1, val: 'second' }]

		expect(join(arr1, arr2)).toEqual(expected)
	})

	it('should not mutate input arrays', () => {
		const arr1 = [{ id: 1, x: 1 }]
		const arr2 = [{ id: 1, x: 2 }]
		const arr1Copy = JSON.parse(JSON.stringify(arr1))
		const arr2Copy = JSON.parse(JSON.stringify(arr2))

		join(arr1, arr2)

		expect(arr1).toEqual(arr1Copy)
		expect(arr2).toEqual(arr2Copy)
	})

	it('should return new objects (not references to input)', () => {
		const arr1 = [{ id: 1, x: 1 }]
		const arr2 = [{ id: 1, x: 2 }]
		const result = join(arr1, arr2)

		expect(result[0]).not.toBe(arr1[0])
		expect(result[0]).not.toBe(arr2[0])
	})
})
