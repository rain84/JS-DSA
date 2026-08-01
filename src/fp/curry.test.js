import { curry } from './curry.js'

it('should work', () => {
	const sum = (a, b, c) => a + b + c
	const sum0 = curry(sum)(0)
	const sum01 = sum0(1)
	const sum02 = sum0(2)

	expect(sum0(1, 2)).toBe(3)
	expect(sum0(2, 3)).toBe(5)
	expect(sum01(6)).toBe(7)
	expect(sum01(8)).toBe(9)
	expect(sum02(8)).toBe(10)
	expect(sum02(10)).toBe(12)
})
