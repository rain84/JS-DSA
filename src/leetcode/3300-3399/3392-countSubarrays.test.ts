import { countSubarrays } from './3392-countSubarrays'

it.each(
	//  prettier-ignore
	[
		[[1, 2, 1, 4, 1], 1],
		[[1, 1, 1], 0],
	],
)('should work %#', (input, output) => {
	expect(countSubarrays(input)).toBe(output)
})
