import { maxDistance } from './0624-maxDistance'

it.each(
  //  prettier-ignore
  [
    [
      [[1,2,3],[4,5],[1,2,3]],
      4
    ],
    [
      [[1],[1]],
      0
    ],
    [
      [[1,4],[0,5]],
      4
    ],
    [
      [[-2],[-3,-2,1]],
      3
    ],
    [
      [[-1,5],[1,4,6],[4,5,6]],
      7
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxDistance(input)).toBe(output)
})
