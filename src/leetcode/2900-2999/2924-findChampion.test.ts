import { findChampion } from './2924-findChampion'

it.each(
  //  prettier-ignore
  [
    [
      3, [[0,1],[1,2]],
      0
    ],
    [
      4, [[0,2],[1,3],[1,2]],
      -1
    ]
  ]
)('should work %#', (n, edges, output) => {
  expect(findChampion(n, edges)).toBe(output)
})
