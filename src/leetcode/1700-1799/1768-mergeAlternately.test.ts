import { _mergeAlternately, _mergeAlternately_, mergeAlternately } from './1768-mergeAlternately'

it.each(
	// prettier-ignore
	[
		['abc', 'pqr', 'apbqcr'],
		['ab', 'pqrs', 'apbqrs'],
		['abcd', 'pq', 'apbqcd'],
		['', '', ''],
		['a', '', 'a'],
		['', 'a', 'a'],
		['a', 'b', 'ab'],
		['ab', 'cd', 'acbd'],
		['abc', 'def', 'adbecf'],
		['a', 'bcdef', 'abcdef'],
		['bcdef', 'a', 'bacdef'],
		['xy', 'z', 'xzy'],
		['xyz', 'xy', 'xxyyz'],
	],
)('mergeAlternately("%s", "%s") = "%s"', (word1, word2, expected) => {
	expect(mergeAlternately(word1, word2)).toBe(expected)
})
