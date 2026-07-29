import { countGoodNumbers } from './1922-countGoodNumbers'

it.each(
  //  prettier-ignore
  [
    [
      1,
      5
    ],
    [
      4,
      400
    ],
    [
      50,
      564908303
    ]
  ]
)('should work %#', (input, output) => {
  expect(countGoodNumbers(input)).toBe(output)
})
