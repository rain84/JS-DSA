import { getRow } from './0119-getRow'

it.each(
	// prettier-ignore
	[
		[0, [1]],
		[1, [1, 1]],
		[2, [1, 2, 1]],
		[3, [1, 3, 3, 1]],
		[4, [1, 4, 6, 4, 1]],
		[5, [1, 5, 10, 10, 5, 1]],
		[10, [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]],
		[20, [1, 20, 190, 1140, 4845, 15504, 38760, 77520, 125970, 167960, 184756, 167960, 125970, 77520, 38760, 15504, 4845, 1140, 190, 20, 1]],
	],
)('getRow(%i) = %p', (rowIndex, expected) => {
	expect(getRow(rowIndex)).toEqual(expected)
})

it('row is symmetric', () => {
	const row = getRow(15)
	for (let i = 0; i < row.length / 2; i++) {
		expect(row[i]).toBe(row[row.length - 1 - i])
	}
})

it('row starts and ends with 1', () => {
	for (let i = 0; i <= 20; i++) {
		const row = getRow(i)
		expect(row[0]).toBe(1)
		expect(row[row.length - 1]).toBe(1)
	}
})

it('inner elements follow binomial coefficient formula', () => {
	const rowIndex = 8
	const row = getRow(rowIndex)
	for (let i = 1; i < row.length; i++) {
		// C(n, k) = C(n, k-1) * (n - k + 1) / k
		expect(row[i]).toBe(row[i - 1] * (rowIndex - i + 1) / i)
	}
})