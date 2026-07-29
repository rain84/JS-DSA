import { findKthLargest } from './0215-findKthLargest'

it.each(
  //  prettier-ignore
  [
    [
      [3,2,1,5,6,4], 2,
      5
    ],
    [
      [3,2,3,1,2,4,5,5,6], 4,
      4    
    ],
  ]
)('should work %#', (nums, k, output) => {
  expect(findKthLargest(nums, k)).toBe(output)
})
