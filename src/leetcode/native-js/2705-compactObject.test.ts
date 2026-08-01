import { compactObject } from './2705-compactObject'

it('should work 1', () => {
	expect(compactObject([null, 0, false, 1])).toMatchObject([1])
})

it('should work 2', () => {
	expect(compactObject({ a: null, b: [false, 1] })).toMatchObject({ b: [1] })
})

it('should work 3', () => {
	expect(compactObject([null, 0, 5, [0], [false, 16]])).toMatchObject([5, [], [16]])
})
