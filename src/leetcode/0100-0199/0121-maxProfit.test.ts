import { maxProfit, maxProfit2, maxProfit3 } from './0121-maxProfit'

it.each(
  //  prettier-ignore
  [
    [
      [7,1,5,3,6,4],
      5
    ],
    [
      [7,6,4,3,1],
      0
    ],
  ]
)('should work %#', (input, output) => {
  expect(maxProfit(input)).toBe(output)
  expect(maxProfit2(input)).toBe(output)
  expect(maxProfit3(input)).toBe(output)
})
