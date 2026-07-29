import { queryResults } from './3160-queryResults'

it.each(
  //  prettier-ignore
  [
    [
      4, [[1,4],[2,5],[1,3],[3,4]],
      [1,2,2,3]
    ],
    [
      4, [[0,1],[1,2],[2,2],[3,4],[4,5]],
      [1,2,2,3,4]
    ],
    [
      1, [[0,1],[1,4],[1,1],[1,4],[1,1]],
      [1,2,1,2,1]
    ]
  ]
)('should work %#', (limit, queries, output) => {
  expect(queryResults(limit, queries)).toMatchObject(output)
})
