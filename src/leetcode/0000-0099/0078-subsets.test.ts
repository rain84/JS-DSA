import { subsets } from './0078-subsets'
import { sort } from './util'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3],
      [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
    ],
    [
      [0],
      [[],[0]]
    ]
  ]
)('should work %#', (input, output) => {
  expect(sort(subsets(input))).toBe(sort(output))
})
