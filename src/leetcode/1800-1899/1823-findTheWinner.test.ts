import { findTheWinner, findTheWinner2 } from './1823-findTheWinner'

it.each(
  //  prettier-ignore
  [
    [
      5, 2,
      3
    ],
    [
      6, 5,
      1
    ]
  ]
)('should work %#', (n, k, output) => {
  expect(findTheWinner(n, k)).toBe(output)
  expect(findTheWinner2(n, k)).toBe(output)
})
