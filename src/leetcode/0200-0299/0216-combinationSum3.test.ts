import { combinationSum3 } from './0216-combinationSum3'

it.each(
  //  prettier-ignore
  [
    [
      3, 7,
      [[1,2,4]]
    ],
    [
      3, 9,
      [[1,2,6],[1,3,5],[2,3,4]]
    ],
    [
      4, 1,
      []
    ]
  ]
)('should work %#', (k, n, output) => {
  expect(combinationSum3(k, n)).toMatchObject(output)
})
