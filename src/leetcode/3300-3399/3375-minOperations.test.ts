import { minOperations, minOperations2 } from './3375-minOperations'

it.each(
  //  prettier-ignore
  [
    [
      [5,2,5,4,5], 2,
      2
    ],
    [
      [2,1,2], 2,
      -1
    ],
    [
      [9,7,5,3], 1,
      4
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(minOperations(nums, k)).toBe(output)
  expect(minOperations2(nums, k)).toBe(output)
})
