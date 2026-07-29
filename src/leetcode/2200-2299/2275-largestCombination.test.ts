import { largestCombination } from './2275-largestCombination'

it.each(
  //  prettier-ignore
  [
    [
      [16,17,71,62,12,24,14],
      4
    ],
    [
      [8,8],
      2
    ]
  ]
)('should work %#', (input, output) => {
  expect(largestCombination(input)).toBe(output)
})
