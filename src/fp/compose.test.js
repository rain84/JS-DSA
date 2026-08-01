import { compose, composeRecursive, composeRecursive2 } from './compose.js'

const sum = (a, b) => a + b
const mult = (a, b, c) => a * b * c
const double = (a) => a * 2
const minusOne = (a) => a - 1
const injectArgs =
	(...args) =>
	(first) => [first, ...args]

it('compose should work', () => {
	const result = compose(mult, injectArgs(2, 2), double, minusOne, sum)(3, 2)
	expect(result).toBe(32)
})

it('composeRecursive should work', () => {
	const result = composeRecursive(mult, injectArgs(2, 2), double, minusOne, sum)(3, 2)
	expect(result).toBe(32)
})

xit('composeRecursive2 should work', () => {
	const result = composeRecursive2(mult, injectArgs(2, 2), double, minusOne, sum)(3, 2)
	expect(result).toBe(32)
})
