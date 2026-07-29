import { minimumMountainRemovals } from './1671-minimumMountainRemovals'

it.each(
  //  prettier-ignore
  [
    [
      [1, 3, 1],
      0,
    ],
    [
      [2, 1, 1, 5, 6, 2, 3, 1],
      3,
    ],
    [
      [9, 8, 1, 7, 6, 5, 4, 3, 2, 1],
      2,
    ],
  ]
)('should work %#', (input, output) => {
  expect(minimumMountainRemovals(input)).toBe(output)
})
