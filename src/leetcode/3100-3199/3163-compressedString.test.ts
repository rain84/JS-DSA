import { compressedString, compressedString2 } from './3163-compressedString'

it.each(
  //  prettier-ignore
  [
    [
      "abcde",
      "1a1b1c1d1e"
    ],
    [
      "aaaaaaaaaaaaaabb",
      "9a5a2b"
    ]
  ]
)('should work %#', (input, output) => {
  expect(compressedString(input)).toBe(output)
  expect(compressedString2(input)).toBe(output)
})
