import { findKthBit, findKthBit2, findKthBit3 } from './1545-findKthBit.ts'

it.each(
  //  prettier-ignore
  [
    [
      3, 1,
      "0"
    ],
    [
      4, 11,
      "1"
    ]
  ]
)('should work %#', (n, k, output) => {
  expect(findKthBit(n, k)).toBe(output)
  expect(findKthBit2(n, k)).toBe(output)
  expect(findKthBit3(n, k)).toBe(output)
})
