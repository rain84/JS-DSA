import { generate } from './0118-generate'

it.each(
	// prettier-ignore
	[
		[0, []],
		[1, [[1]]],
		[2, [[1], [1, 1]]],
		[3, [[1], [1, 1], [1, 2, 1]]],
		[4, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]],
		[5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]],
		[6, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]],
	],
)('generate(%i) = %p', (numRows, expected) => {
	expect(generate(numRows)).toEqual(expected)
})

it('each row starts and ends with 1', () => {
	const triangle = generate(10)
	for (const row of triangle) {
		expect(row[0]).toBe(1)
		expect(row[row.length - 1]).toBe(1)
	}
})

it('each inner element equals sum of two above', () => {
	const triangle = generate(8)
	for (let i = 2; i < triangle.length; i++) {
		for (let j = 1; j < triangle[i].length - 1; j++) {
			expect(triangle[i][j]).toBe(triangle[i - 1][j - 1] + triangle[i - 1][j])
		}
	}
})
