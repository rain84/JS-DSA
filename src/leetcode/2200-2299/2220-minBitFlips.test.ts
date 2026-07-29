import { minBitFlips } from './2220-minBitFlips'

it.each(
  //  prettier-ignore
  [
    [
      10, 7,
      3
    ],
    [
      3, 4,
      3
    ]
  ]
)('should work %#', (start, goal, output) => {
  expect(minBitFlips(start, goal)).toBe(output)
})
