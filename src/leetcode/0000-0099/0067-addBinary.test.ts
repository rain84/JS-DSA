import { _addBinary, addBinary } from './0067-addBinary'

it.each(
	// prettier-ignore
	[
		['11', '1', '100'],
		['1010', '1011', '10101'],
		['0', '0', '0'],
		['1', '1', '10'],
		['1', '0', '1'],
		['0', '1', '1'],
		['111', '111', '1110'],
		['100', '10', '110'],
		['1111', '1111', '11110'],
		['1', '111', '1000'],
		['101', '101', '1010'],
		['', '1', '1'],
		['1', '', '1'],
		['0', '', '0'],
		['', '', '0'],
	],
)('addBinary("%s", "%s") = "%s"', (a, b, expected) => {
	expect(addBinary(a, b)).toBe(expected)
	expect(_addBinary(a, b)).toBe(expected)
})
