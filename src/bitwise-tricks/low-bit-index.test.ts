import { lowBitIndex } from './low-bit-index'

it.each(
	//  prettier-ignore
	[
		[0, -1], // '0'
		[1, 0], // '1'
		[10, 1], // '1010'
		[11, 0], // '1011'
		[12, 2], // '1100'
		[13, 0], // '1101'
		[14, 1], // '1110'
		[15, 0], // '1111'
		[16, 4], // '10000'
	],
)('should work %#', (input, output) => {
	expect(lowBitIndex(input)).toBe(output)
})
