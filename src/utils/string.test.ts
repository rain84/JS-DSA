import { getTrailingNumber, toAlphabetKey } from './string'

it.each(
	//  prettier-ignore
	[
		[0, 'a'],
		[25, 'z'],
		[26, 'ba'],
		[675, 'zz'],
		[676, 'baa'],
	],
)('should work %#', (input, output) => {
	expect(toAlphabetKey(input)).toBe(output)
})

it('should return trailing number when string ends with digits', () => {
	const result = getTrailingNumber('abc123')
	expect(result).toBe(123)
})

it('should return default value when input is an empty string', () => {
	const result = getTrailingNumber('')
	expect(result).toBe(1)
})
