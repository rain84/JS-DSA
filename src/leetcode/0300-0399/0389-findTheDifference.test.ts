import { findTheDifference } from './0389-findTheDifference'

it.each(
	// prettier-ignore
	[
		['abcd', 'abcde', 'e'],
		['', 'y', 'y'],
		['a', 'aa', 'a'],
		['ae', 'aea', 'a'],
		['abcd', 'abecd', 'e'],
		['xyz', 'xzya', 'a'],
	],
)('findTheDifference("%s","%s") = "%s"', (s, t, expected) => {
	expect(findTheDifference(s, t)).toBe(expected)
})
