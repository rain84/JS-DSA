import { countUnguarded } from './2257-countUnguarded'

it.each(
  //  prettier-ignore
  [
    [
      4, 6, [[0,0],[1,1],[2,3]], [[0,1],[2,2],[1,4]],
      7
    ],
    [
      3, 3, [[1,1]], [[0,1],[1,0],[2,1],[1,2]],
      4
    ]
  ]
)('should work %#', (m, n, guards, walls, output) => {
  expect(countUnguarded(m, n, guards, walls)).toBe(output)
})
