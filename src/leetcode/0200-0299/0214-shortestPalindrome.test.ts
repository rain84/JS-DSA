import { shortestPalindrome } from './0214-shortestPalindrome'

it.each(
  //  prettier-ignore
  [
    [
      "aacecaaa",
      "aaacecaaa"
    ],
    [
      "abcd",
      "dcbabcd"
    ]
  ]
)('should work %#', (input, output) => {
  expect(shortestPalindrome(input)).toBe(output)
})
