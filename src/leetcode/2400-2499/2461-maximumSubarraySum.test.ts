import { maximumSubarraySum } from './2461-maximumSubarraySum'

it.each(
  //  prettier-ignore
  [
    [
      [1,5,4,2,9,9,9], 3,
      15
    ],
    [
      [4,4,4], 3,
      0
    ],
    [
      [1,1,1,7,8,9], 3,
      24
    ],
    [
      [9,9,9,1,2,3], 3,
      12
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(maximumSubarraySum(nums, k)).toBe(output)
})
