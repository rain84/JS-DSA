import { isPalindrome } from './0125-isPalindrome'

it.each(
	// prettier-ignore
	[
		['A man, a plan, a canal: Panama', true],
		['race a car', false],
		[' ', true],
		['', true],
		['a', true],
		['aa', true],
		['ab', false],
		['0P', false],
		['Aa', true],
		['a.', true],
		['a b', false],
		['a,b', false],
		['a_b', false],
		['a_b_a', true],
		['ab_a', true],
		['abca', false],
		['abcba', true],
		['abccba', true],
		['12321', true],
		['12345', false],
		['A man, a plan, a canal: Panama!', true],
		['racecar', true],
		['RaceCar', true],
		['tab', false],
	],
)('isPalindrome("%s") = %s', (s, expected) => {
	expect(isPalindrome(s)).toBe(expected)
})
