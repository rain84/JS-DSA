import { calPoints } from './0682-calPoints'

it.each(
	// prettier-ignore
	[
		[['5', '2', 'C', 'D', '+'], 30],
		[['5', '-2', '4', 'C', 'D', '9', '+', '+'], 27],
		[['1', 'C'], 0],
		[['1'], 1],
		[['1', '2', '+'], 6], // 1,2,3
		[['5', '2', '+', 'D'], 28], // 5,2,7,14
	],
)('calPoints(%p) = %i', (ops, expected) => {
	expect(calPoints(ops)).toBe(expected)
})