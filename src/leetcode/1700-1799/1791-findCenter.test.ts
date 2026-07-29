import { findCenter, findCenter2 } from './1791-findCenter'

it.each(
  //  prettier-ignore
  [
    [
      [[1, 2], [2, 3], [4, 2]], 
      2
    ],
    [
      [[4, 5], [1, 2], [5, 1], [1, 3], [1, 4]], 
      1
    ],
    [
      [[1, 3], [2, 3]], 
      3
    ],
  ]
)('should work %#', (input, output) => {
  expect(findCenter(input)).toBe(output)
  expect(findCenter2(input)).toBe(output)
})
