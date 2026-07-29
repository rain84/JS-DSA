import { minimumEffortPath } from './1631-minimumEffortPath'

it.each(
  //  prettier-ignore
  [
    [
      [[1, 2, 2],[3, 8, 2],[5, 3, 5],],
      2
    ],
    [
      [[1, 2, 3],[3, 8, 4],[5, 3, 5],],
      1
    ],
    [
      [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]],
      0
    ],
    [
      [[3]],
      0
    ]
  ]
)('should work %#', (input, output) => {
  expect(minimumEffortPath(input)).toBe(output)
})
