import { splitArray } from './0410-splitArray'

it.each(
  //  prettier-ignore
  [
    [
      [7,2,5,10,8], 2,
      18
    ],
    [
      [1,2,3,4,5], 2,
      9
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(splitArray(nums, k)).toBe(output)
})
