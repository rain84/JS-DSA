import { countGoodStrings } from './2466-countGoodStrings'

it.each(
  //  prettier-ignore
  [
    [
      3, 3, 1, 1,
      8
    ],
    [
      2, 3, 1, 2,
      5
    ]
  ]
)('should work %#', (low, high, zero, one, output) => {
  expect(countGoodStrings(low, high, zero, one)).toBe(output)
})
