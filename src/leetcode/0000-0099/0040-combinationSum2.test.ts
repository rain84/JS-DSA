import { combinationSum2 } from './0040-combinationSum2'

it.each(
  //  prettier-ignore
  [
    [
      [10,1,2,7,6,1,5], 8,
      [
        [1,1,6],
        [1,2,5],
        [1,7],
        [2,6]
      ]
    ],
    [
      [2,5,2,1,2], 5,
      [
        [1,2,2],
        [5]
      ]
    ],
    [
      [1], 1,
      [[1]]
    ],
    [
      [4,4,2,1,4,2,2,1,3], 6,
      [[1,1,2,2],[1,1,4],[1,2,3],[2,2,2],[2,4]]
    ]
  ]
)('should work %#', (candidates, target, output) => {
  expect(sort(combinationSum2(candidates, target))).toMatchObject(sort(output))
})

const sort = (arr: number[][]) => arr.map((x) => x.sort((a, b) => a - b).join()).sort()
