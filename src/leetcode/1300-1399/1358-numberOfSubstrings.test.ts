import { numberOfSubstrings } from './1358-numberOfSubstrings'

it.each(
  //  prettier-ignore
  [
    [
      "abcabc",
      10
    ],
    [
      "aaacb",
      3
    ],
    [
      "abc",
      1
    ]
  ]
)('should work %#', (input, output) => {
  expect(numberOfSubstrings(input)).toBe(output)
})
