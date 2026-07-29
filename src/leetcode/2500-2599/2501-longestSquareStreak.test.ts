import { longestSquareStreak, longestSquareStreak2 } from './2501-longestSquareStreak'

it.each(
  //  prettier-ignore
  [
    [
      [4,3,6,16,8,2],
      3
    ],
    [
      [2,3,5,6,7],
      -1
    ],
    [
      [2,2],
      -1
    ],
  ]
)('should work %#', (input, output) => {
  expect(longestSquareStreak(input)).toBe(output)
  expect(longestSquareStreak2(input)).toBe(output)
})
