import { fibonacci, fibonacci2, fibonacci3 } from './fibonacci'

it.each(
	//  prettier-ignore
	[
		[3, 2],
		[10, 55],
		[7, 13],
	],
)('should work %#', (input, output) => {
	expect(fibonacci(input)).toBe(output)
	expect(fibonacci2(input)).toBe(output)
	expect(fibonacci3(input)).toBe(output)
})
