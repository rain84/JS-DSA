import { countPrefixSuffixPairs } from './3042-countPrefixSuffixPairs'

it.each(
  //  prettier-ignore
  [
    [
      ["a","aba","ababa","aa"],
      4
    ],
    [
      ["pa","papa","ma","mama"],
      2
    ],
    [
      ["abab","ab"],
      0
    ]
  ]
)('should work %#', (input, output) => {
  expect(countPrefixSuffixPairs(input)).toBe(output)
})
