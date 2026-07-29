import { removeStones } from './0947-removeStones'

it.each(
  //  prettier-ignore
  [
    [
      [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]],
      5
    ],
    [
      [[0,0],[0,2],[1,1],[2,0],[2,2]],
      3
    ]
  ]
)('should work %#', (input, output) => {
  expect(removeStones(input)).toBe(output)
})
