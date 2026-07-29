import { lenLongestFibSubseq } from './873-lenLongestFibSubseq'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4,5,6,7,8],
      5
    ],
    [
      [1,3,7,11,12,14,18],
      3
    ]
  ]
)('should work %#', (input, output) => {
  expect(lenLongestFibSubseq(input)).toBe(output)
})
