import { findLeastNumOfUniqueInts } from './1481-findLeastNumOfUniqueInts'

it.each(
  //  prettier-ignore
  [
    [
      [5,5,4], 1,
      1
    ],
    [
      [4,3,1,1,3,3,2], 3,
      2
    ],
  ]
)('should work %#', (arr, k, output) => {
  expect(findLeastNumOfUniqueInts(arr, k)).toBe(output)
})
