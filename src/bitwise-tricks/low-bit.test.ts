import { lowBit } from './low-bit'

it.each(
	//  prettier-ignore
	[
		[0, 0], //  0 -> 0
		[1, 1], //  1 -> 1
		[2, 2], //  10 -> 10
		[3, 1], //  11 -> 1
		[4, 4], //  100 -> 100
		[5, 1], //  101 -> 1
		[6, 2], //  110 -> 10
		[7, 1], //  111 -> 1
		[8, 8], //  1000 -> 1000
		[9, 1], //  1001 -> 1
	],
)('should work %#', (input, output) => {
	expect(lowBit(input)).toBe(output)
})
