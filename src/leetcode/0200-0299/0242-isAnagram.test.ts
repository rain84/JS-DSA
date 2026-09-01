import { isAnagram } from './0242-isAnagram'

it.each(
	// prettier-ignore
	[
		['anagram', 'nagaram', true],
		['rat', 'car', false],
		['', '', true],
		['a', 'a', true],
		['a', 'b', false],
		['ab', 'ba', true],
		['ab', 'ab', true],
		['abc', 'cba', true],
		['aab', 'aba', true],
		['aab', 'abb', false],
		['anagram', 'nagaramx', false],
	],
)('isAnagram("%s","%s") = %s', (s, t, expected) => {
	expect(isAnagram(s, t)).toBe(expected)
})