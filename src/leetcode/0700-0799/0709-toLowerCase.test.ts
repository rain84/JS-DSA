import { toLowerCase } from './0709-toLowerCase'

it.each(
	// prettier-ignore
	[
		['Hello', 'hello'],
		['here', 'here'],
		['LOVELY', 'lovely'],
		['', ''],
		['123ABC', '123abc'],
		['aB1!@', 'ab1!@'],
		['HELLO WORLD', 'hello world'],
	],
)('toLowerCase("%s") = "%s"', (s, expected) => {
	expect(toLowerCase(s)).toBe(expected)
})
