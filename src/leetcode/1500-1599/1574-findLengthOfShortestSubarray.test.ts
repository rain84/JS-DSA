import { findLengthOfShortestSubarray } from './1574-findLengthOfShortestSubarray'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,10,4,2,3,5],
      3
    ],
    [
      [5,4,3,2,1],
      4
    ],
    [
      [1,2,3],
      0
    ],
    [
      [2,2,2,1,1,1],
      3
    ],
    [
      [13,0,14,7,18,18,18,16,8,15,20],
      8
    ]
  ]
)('should work %#', (input, output) => {
  expect(findLengthOfShortestSubarray(input)).toBe(output)
})
