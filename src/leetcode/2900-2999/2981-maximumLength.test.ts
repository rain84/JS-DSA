import { maximumLength } from './2981-maximumLength'

it.each(
  //  prettier-ignore
  [
    [
      "aaaa",
      2
    ],
    [
      "abcdef",
      -1
    ],
    [
      "abcaba",
      1
    ]
  ]
)('should work %#', (input, output) => {
  expect(maximumLength(input)).toBe(output)
})
