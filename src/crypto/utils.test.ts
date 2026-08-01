import { euler, gcd, isCoprime, primes } from './utils'

it.each(
	//  prettier-ignore
	[
		[54, 24, 6],
		[180, 150, 30],
		[23444, 1976232, 4],
	],
)('gcd() should work %#', (a, b, output) => {
	expect(gcd(a, b)).toBe(output)
	expect(gcd(b, a)).toBe(output)
})

it.each(
	//  prettier-ignore
	[
		[14, 26, false],
		[13, 7, true],
		[41, 347, true],
	],
)('isCoprime() should work %#', (a, b, output) => {
	expect(isCoprime(a, b)).toBe(output)
})

it.each(
	//  prettier-ignore
	[
		[1, 1],
		[5, 4],
		[101, 100],
		[201, 132],
		[301, 252],
		[401, 400],
	],
)('euler() should work %#', (input, output) => {
	expect(euler(input)).toBe(output)
})

it('primes() should work', () => {
	const output = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
	expect(primes(30)).toMatchObject(output)
})
