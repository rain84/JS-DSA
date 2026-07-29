import { numberToWords } from './0273-numberToWords'

it.each(
  //  prettier-ignore
  [
    [
      123,
      "One Hundred Twenty Three"
    ],
    [
      12345,
      "Twelve Thousand Three Hundred Forty Five"
    ],
    [
      1234567,
      "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
    ]
  ]
)('should work %#', (input, output) => {
  expect(numberToWords(input)).toBe(output)
})
