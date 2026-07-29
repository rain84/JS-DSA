import { xorAllNums } from './2425-xorAllNums'

it.each(
  //  prettier-ignore
  [
    [
      [2,1,3], [10,2,5,0],
      13
    ],
    [
      [1,2], [3,4],
      0
    ]
  ]
)('should work %#', (nums1, nums2, output) => {
  expect(xorAllNums(nums1, nums2)).toBe(output)
})
