import { strangePrinter } from './0664-strange-printer'

it.each(
  //  prettier-ignore
  [
    [
      "aaabbb",
      2
    ],
    [
      "aba",
      2
    ],
    [
      "tbgtgb",
      4
    ]
  ]
)('should work %#', (input, output) => {
  expect(strangePrinter(input)).toBe(output)
})
