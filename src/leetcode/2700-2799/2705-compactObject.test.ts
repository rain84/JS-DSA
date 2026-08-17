import { compactObject } from './2705-compactObject'

describe('compactObject', () => {
	// LeetCode examples
	it('example 1: array with falsy values', () => {
		expect(compactObject([null, 0, false, 1])).toEqual([1])
	})

	it('example 2: object with nested array', () => {
		expect(compactObject({ a: null, b: [false, 1] })).toEqual({ b: [1] })
	})

	it('example 3: array with nested arrays', () => {
		expect(compactObject([null, 0, 5, [0], [false, 16]])).toEqual([5, [], [16]])
	})

	// Edge cases
	it('empty object', () => {
		expect(compactObject({})).toEqual({})
	})

	it('empty array', () => {
		expect(compactObject([])).toEqual([])
	})

	it('object with all falsy values', () => {
		expect(compactObject({ a: null, b: 0, c: false, d: '' })).toEqual({})
	})

	it('array with all falsy values', () => {
		expect(compactObject([null, 0, false, ''])).toEqual([])
	})

	it('nested object with falsy values', () => {
		expect(compactObject({ a: { b: null, c: 1 }, d: 0 })).toEqual({ a: { c: 1 } })
	})

	it('nested array with objects', () => {
		expect(compactObject([{ a: null, b: 2 }, [0, { c: false, d: 3 }]])).toEqual([
			{ b: 2 },
			[{ d: 3 }],
		])
	})

	it('deeply nested structure', () => {
		expect(
			compactObject({
				level1: {
					level2: {
						level3: [null, { value: 0, keep: 1 }, false],
					},
				},
			}),
		).toEqual({
			level1: {
				level2: {
					level3: [{ keep: 1 }],
				},
			},
		})
	})

	it('array containing empty objects and arrays', () => {
		expect(compactObject([{}, [], { a: null }, [0]])).toEqual([{}, [], {}, []])
	})

	it('object with empty string key (falsy)', () => {
		expect(compactObject({ '': 1, a: 2 })).toEqual({ '': 1, a: 2 })
	})

	it('preserves truthy values: empty object and empty array are truthy', () => {
		// Note: In JS, [] and {} are truthy, so they should be preserved
		expect(compactObject({ a: [], b: {} })).toEqual({ a: [], b: {} })
		expect(compactObject([[], {}])).toEqual([[], {}])
	})

	it('handles NaN as falsy', () => {
		expect(compactObject({ a: NaN, b: 1 })).toEqual({ b: 1 })
	})

	it('handles mixed types in array', () => {
		expect(compactObject([1, 'hello', true, { a: 1 }, [2], null, 0, false])).toEqual([
			1,
			'hello',
			true,
			{ a: 1 },
			[2],
		])
	})

	it('does not mutate original object', () => {
		const original = { a: null, b: [false, 1] }
		const copy = JSON.parse(JSON.stringify(original))
		compactObject(original)
		expect(original).toEqual(copy)
	})
})
