import { repeatedSubstringPattern } from './0459-repeatedSubstringPattern'

it.each(
	// prettier-ignore
	[
		['abab', true],
		['aba', false],
		['abcabcabcabc', true],
		['a', false],
		['aa', true],
		['ab', false],
		['aaa', true],
		['abcab', false],
		['ababab', true],
		['abaababaab', true],
		['aabaaba', false],
	],
)('repeatedSubstringPattern("%s") = %s', (s, expected) => {
	expect(repeatedSubstringPattern(s)).toBe(expected)
})
