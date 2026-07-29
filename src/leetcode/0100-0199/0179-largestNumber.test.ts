import { largestNumber } from './0179-largestNumber'

it.each(
  //  prettier-ignore
  [
    [
      [10,2],
      "210"
    ],
    [
      [3,30,34,5,9],
      "9534330"
    ],
    [
      [111311, 1113],
      "1113111311"
    ]
  ]
)('should work %#', (input, output) => {
  expect(largestNumber(input)).toBe(output)
})
