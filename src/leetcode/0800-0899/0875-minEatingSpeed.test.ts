import { minEatingSpeed } from './0875-minEatingSpeed'

it.each(
  //  prettier-ignore
  [
    [
      [3,6,7,11], 8,
      4
    ],
    [
      [30,11,23,4,20], 5,
      30
    ],
    [
      [30,11,23,4,20], 6,
      23
    ],
  ]
)('should work %#', (piles, h, output) => {
  expect(minEatingSpeed(piles, h)).toBe(output)
})
