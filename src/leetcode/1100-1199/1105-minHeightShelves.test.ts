import { minHeightShelves } from './1105-minHeightShelves'

it.each(
  //  prettier-ignore
  [
    [
      [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], 4,
      6
    ],
    [
      [[1,3],[2,4],[3,2]], 6,
      4
    ]
  ]
)('should work %#', (books, shelfWidth, output) => {
  expect(minHeightShelves(books, shelfWidth)).toBe(output)
})
