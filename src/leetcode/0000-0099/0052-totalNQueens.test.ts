import { totalNQueens } from './0052-totalNQueens'

it.each(
  //  prettier-ignore
  [
    [
      4,
      2
    ],
    [
      1,
      1
    ],
    [
      8,
      92
    ]
  ]
)('should work %#', (input, output) => {
  expect(totalNQueens(input)).toBe(output)
})
