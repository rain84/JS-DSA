import { getDigit, getLength, getPrimes, transpose } from './math'

it('getDigit() should work', () => {
	expect(getDigit(123, 1)).toBe(3)
	expect(getDigit(123, 2)).toBe(2)
	expect(getDigit(123, 3)).toBe(1)
	expect(getLength(1000)).toBe(4)
	expect(getLength(0)).toBe(1)
	expect(getLength(1)).toBe(1)
	expect(getLength(10)).toBe(2)
	expect(getLength(-100)).toBe(3)
})

it('rotate() should rotate matrix', () => {
	const matrix = [
		[1, 2],
		[3, 4],
		[5, 6],
	]
	expect(transpose(matrix)).toMatchObject([
		[1, 3, 5],
		[2, 4, 6],
	])

	expect(transpose(transpose(matrix))).toMatchObject(matrix)
})

it('getPrimes() should work', () => {
	const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23]
	expect(getPrimes(primes.length)).toMatchObject(primes)
})
