import { nearestPalindromic } from './0564-nearestPalindromic'

it.each(
  //  prettier-ignore
  [
    [
      "123",
      "121"
    ],
    [
      "1",
      "0"
    ]
  ]
)('should work %#', (input, output) => {
  expect(nearestPalindromic(input)).toBe(output)
})
