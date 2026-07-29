import { maxPoints } from './1937-maxPoints'

it.each(
  //  prettier-ignore
  [
    [
      [[1,2,3],[1,5,1],[3,1,1]],
      9
    ],
    [
      [[1,5],[2,3],[4,2]],
      11
    ],
    [
      [[2,2],[2,2],[2,2]],
      6
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxPoints(input)).toBe(output)
})
