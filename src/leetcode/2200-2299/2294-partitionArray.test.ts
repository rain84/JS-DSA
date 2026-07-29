import { partitionArray } from './2294-partitionArray'

it.each(
  //  prettier-ignore
  [
    [
      [3, 6, 1, 2, 5], 2,
      2
    ],
    [
      [1, 2, 3], 1,
      2
    ],
    [
      [2, 2, 4, 5], 0,
      3
    ],
  ]
)('should work %#', (nums, k, output) => {
  expect(partitionArray(nums, k)).toBe(output)
})
