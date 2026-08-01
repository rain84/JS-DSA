import { solution } from './B - the-great-lineland-migration.js'

it.each(
	//  prettier-ignore
	[[['10', '1 2 3 2 1 4 2 5 3 1'], '-1 4 3 4 -1 6 9 8 9 -1']],
)('should work %#', (input, output) => {
	expect(solution(input)).toBe(output)
})
