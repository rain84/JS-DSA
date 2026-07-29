import { countFairPairs } from './2563-countFairPairs'

it.each(
  //  prettier-ignore
  [
    [
      [0,1,7,4,4,5], 3, 6,
      6
    ],
    [
      [1,7,9,2,5], 11, 11,
      1
    ]
  ]
)('should work %#', (nums, lower, upper, output) => {
  expect(countFairPairs(nums, lower, upper)).toBe(output)
})
