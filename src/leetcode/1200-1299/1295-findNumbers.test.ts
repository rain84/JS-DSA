import { findNumbers } from './1295-findNumbers'

it.each(
  //  prettier-ignore
  [
    [
      [12,345,2,6,7896],
      2
    ],
    [
      [555,901,482,1771],
      1
    ]
  ]
)('should work %#', (input, output) => {
  expect(findNumbers(input)).toBe(output)
})
