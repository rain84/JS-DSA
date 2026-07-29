import { maxMatrixSum } from './1975-maxMatrixSum'

it.each(
  //  prettier-ignore
  [
    [
      [[1,-1],[-1,1]],
      4
    ],
    [
      [[1,2,3],[-1,-2,-3],[1,2,3]],
      16
    ],
    [
      [[-1,0,-1],[-2,1,3],[3,2,2]],
      15
    ],
    [
      [[2,9,3],[5,4,-4],[1,7,1]],
      34
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxMatrixSum(input)).toBe(output)
})
