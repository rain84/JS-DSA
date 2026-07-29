import { minimumSubarrayLength } from './3097-minimumSubarrayLength'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3], 2,
      1
    ],
    [
      [2,1,8], 10,
      3
    ],
    [
      [1,2], 0,
      1
    ],
    [
      [1,2,32,21], 55,
      3
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(minimumSubarrayLength(nums, k)).toBe(output)
})
