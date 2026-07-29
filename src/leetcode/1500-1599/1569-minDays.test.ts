import { minDays } from './1569-minDays'

it.each(
  //  prettier-ignore
  [
    [
      [[0,1,1,0],[0,1,1,0],[0,0,0,0]],
      2
    ],
    [
      [[1,1]],
      2
    ],
    [
      [[1,0,1,0]],
      0
    ],
    [
      [[1,1,0,1,1],[1,1,1,1,1],[1,1,0,1,1],[1,1,0,1,1]],
      1
    ]
  ]
)('should work %#', (input, output) => {
  expect(minDays(input)).toBe(output)
})
