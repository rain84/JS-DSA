import { findKthNumber } from './0440-findKthNumber'

it.each(
  //  prettier-ignore
  [
    [
      13, 2,
      10
    ],
    [
      1, 1,
      1
    ],
    // [
    //   5180541, 1762750
    // ]
  ]
)('should work %#', (n, k, output) => {
  expect(findKthNumber(n, k)).toBe(output)
})
