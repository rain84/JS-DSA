import { shortestDistanceAfterQueries } from './3243-shortestDistanceAfterQueries'

it.each(
  //  prettier-ignore
  [
    [
      5, [[2,4],[0,2],[0,4]],
      [3,2,1]
    ],
    [
      4, [[0,3],[0,2]],
      [1,1]
    ],
    [
      6, [[1,3],[3,5]],
      [4,3]
    ]
  ]
)('should work %#', (n, queries, output) => {
  expect(shortestDistanceAfterQueries(n, queries)).toMatchObject(output)
})
