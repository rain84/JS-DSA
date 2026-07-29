import { countAndSay } from './38-countAndSay'

it.each(
  //  prettier-ignore
  [
    [
      4,
      "1211"
    ],
    [
      1,
      "1"
    ]
  ]
)('should work %#', (input, output) => {
  expect(countAndSay(input)).toBe(output)
})
