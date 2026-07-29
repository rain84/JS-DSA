import { numMagicSquaresInside } from './0840-numMagicSquaresInside'

it.each(
  //  prettier-ignore
  [
    [
      [[4,3,8,4],[9,5,1,9],[2,7,6,2]],
      1
    ],
    [
      [[8]],
      0
    ],
    [
      [[5,5,5],[5,5,5],[5,5,5]],
      0
    ],
    [
      [[1,8,6],[10,5,0],[4,2,9]],
      0
    ]
  ]
)('should work %#', (input, output) => {
  expect(numMagicSquaresInside(input)).toBe(output)
})
