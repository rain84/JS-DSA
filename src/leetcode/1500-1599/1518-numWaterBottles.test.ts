import { numWaterBottles } from './1518-numWaterBottles'

it.each(
  //  prettier-ignore
  [
    [
      9, 3,
      13
    ],
    [
      15, 4,
      19
    ]
  ]
)('should work %#', (numBottles, numExchange, output) => {
  expect(numWaterBottles(numBottles, numExchange)).toBe(output)
})
