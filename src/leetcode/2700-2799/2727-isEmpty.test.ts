import { isEmpty } from './2727-isEmpty'

it.each(
	// prettier-ignore
	[
		[{}, true],
		[[], true],
		[{ a: 1 }, false],
		[{ a: 1, b: 2 }, false],
		[[1, 2, 3], false],
		[['a'], false],
		[{ nested: {} }, false],
		[{ emptyArray: [] }, false],
		[{ nullValue: null }, false],
		[{ falseValue: false }, false],
		[{ zeroValue: 0 }, false],
		[{ emptyString: '' }, false],
	] as const,
)('should work %#', (input, output) => {
	expect(isEmpty(input)).toBe(output)
})
