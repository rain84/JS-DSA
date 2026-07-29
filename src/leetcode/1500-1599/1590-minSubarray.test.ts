import { minSubarray } from './1590-minSubarray'

it.each(
  //  prettier-ignore
  [
    [
      [3,1,4,2], 6,
      1
    ],
    [
      [6,3,5,2], 9,
      2
    ],
    [
      [1,2,3], 3,
      0
    ]
  ]
)('should work %#', (nums, p, output) => {
  expect(minSubarray(nums, p)).toBe(output)
})
