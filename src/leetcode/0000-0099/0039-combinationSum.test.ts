import { combinationSum } from './0039-combinationSum'
import { sort } from './util'

it.each(
  //  prettier-ignore
  [
    [
      [2,3,6,7], 7,
      [[2,2,3],[7]]
    ],
    [
      [2,3,5], 8,
      [[2,2,2,2],[2,3,3],[3,5]]
    ],
    [
      [2], 1,
      []
    ]
  ]
)('should work %#', (candidates, target, output) => {
  expect(sort(combinationSum(candidates, target))).toBe(sort(output))
})
