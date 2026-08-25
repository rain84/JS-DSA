import { strStr } from './0028-strStr'

it.each(
	// prettier-ignore
	[
		['sadbutsad', 'sad', 0],
		['leetcode', 'leeto', -1],
		['hello', 'll', 2],
		['aaaaa', 'bba', -1],
		['', '', 0],
		['a', 'a', 0],
		['a', '', 0],
		['abc', 'abcd', -1],
		['mississippi', 'issip', 4],
		['mississippi', 'issipi', -1],
		['aaa', 'aaaa', -1],
		['abcde', 'cde', 2],
		['abcabc', 'abc', 0],
		['ababab', 'aba', 0],
		['abc', 'bc', 1],
	],
)('strStr("%s", "%s") = %i', (haystack, needle, expected) => {
	expect(strStr(haystack, needle)).toBe(expected)
})
