import { countPalindromicSubsequence } from './1930-countPalindromicSubsequence'

it.each(
  //  prettier-ignore
  [
    [
      "aabca",
      3
    ],
    [
      "adc",
      0
    ],
    [
      "bbcbaba",
      4
    ]
  ]
)('should work %#', (input, output) => {
  expect(countPalindromicSubsequence(input)).toBe(output)
})
