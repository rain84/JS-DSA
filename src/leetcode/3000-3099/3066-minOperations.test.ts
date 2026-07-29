import { minOperations } from './3066-minOperations'

it.each(
  //  prettier-ignore
  [
    [
      [2,11,10,1,3], 10,
      2
    ],
    [
      [1,1,2,4,9], 20,
      4
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(minOperations(nums, k)).toBe(output)
})
