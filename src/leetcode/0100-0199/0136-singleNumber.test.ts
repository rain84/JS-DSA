import { singleNumber } from './0136-singleNumber'

it.each(
  //  prettier-ignore
  [
    [
      [1, 3, 3, 2, 6, 2, 1],
      6
    ],
    [
      [12, 1, 1, 7, 1, 12, 1],
      7
    ],
    [
      [6],
      6
    ]
  ]
)('should work %#', (input, output) => {
  expect(singleNumber(input)).toBe(output)
})
