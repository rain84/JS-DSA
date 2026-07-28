import { smallestPalindrome } from './3517-smallestPalindrome'

it.each(
	//  prettier-ignore
	[
		['z', 'z'],
		['babab', 'abbba'],
		['daccad', 'acddca'],
	],
)('should work %#', (input, output) => {
	expect(smallestPalindrome(input)).toBe(output)
})
