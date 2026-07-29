import { dividePlayers, dividePlayers2 } from './2491-dividePlayers'

it.each(
  //  prettier-ignore
  [
    [
      [3,2,5,1,3,4,],
      22
    ],
    [
      [3,4],
      12
    ],
    [
      [1,1,2,3],
      -1
    ],
    [
      [2,1,5,2],
      -1
    ],
    [
      [2,2,2,2],
      8
    ],
    [
      [1,1,1,2,3,3,3,7,7,8,8,8,9,9],
      -1
    ]
  ]
)('should work %#', (input, output) => {
  expect(dividePlayers(input)).toBe(output)
  expect(dividePlayers2(input)).toBe(output)
})
