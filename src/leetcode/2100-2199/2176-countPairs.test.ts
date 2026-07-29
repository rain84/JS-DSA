import { countPairs } from './2176-countPairs'

it.each(
  //  prettier-ignore
  [
    [
      [3,1,2,2,2,1,3], 2,
      4
    ],
    [
      [1,2,3,4], 1,
      0
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(countPairs(nums, k)).toBe(output)
})
