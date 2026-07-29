import { maximumBeauty } from './2070-maximumBeauty'

it.each(
  //  prettier-ignore
  [
    [
      [[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6],
      [2,4,5,5,6,6]
    ],
    [
      [[1,2],[1,2],[1,3],[1,4]], [1],
      [4]
    ],
    [
      [[10,1000]], [5],
      [0]
    ]
  ]
)('should work %#', (items, queries, output) => {
  expect(maximumBeauty(items, queries)).toMatchObject(output)
})
