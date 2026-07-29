import { countSquares } from './1277-countSquares'

it.each(
  //  prettier-ignore
  [
    [
      [
        [0,1,1,1],
        [1,1,1,1],
        [0,1,1,1]
      ],
      15
    ],
    [
      [
        [1,0,1],
        [1,1,0],
        [1,1,0]
      ],
      7
    ]
  ]
)('should work %#', (input, output) => {
  expect(countSquares(input)).toBe(output)
})
