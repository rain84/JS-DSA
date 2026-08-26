import { _lengthOfLastWord, lengthOfLastWord } from './0058-lengthOfLastWord'

it.each(
	// prettier-ignore
	[
		['Hello World', 5],
		['   fly me   to   the moon  ', 4],
		['luffy is still joyboy', 6],
		['a', 1],
		[' a', 1],
		['a ', 1],
		['  a  ', 1],
		['', 0],
		['    ', 0],
		['today is a nice day', 3],
		['Hello', 5],
		['Hello World ', 5],
		['   Hello World', 5],
		['abc def ghi', 3],
		['a b c d e', 1],
	],
)('lengthOfLastWord("%s") = %i', (s, expected) => {
	expect(lengthOfLastWord(s)).toBe(expected)
	expect(_lengthOfLastWord(s)).toBe(expected)
})
