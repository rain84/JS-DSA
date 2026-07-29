import { allPathsSourceTarget } from './0797-allPathsSourceTarget'
import { sort } from './util'

it.each(
  //  prettier-ignore
  [
    [
      [[1,2],[3],[3],[]],
      [[0,1,3],[0,2,3]]
    ],
    [
      [[4,3,1],[3,2,4],[3],[4],[]],
      [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
    ]
  ]
)('should work %#', (input, output) => {
  expect(sort(allPathsSourceTarget(input))).toBe(sort(output))
})
