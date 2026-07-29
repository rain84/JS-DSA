import { minSwaps } from './1963-minSwaps'

it.each(
  //  prettier-ignore
  [
    [
      "][][",
      1
    ],
    [
      "]]][[[",
      2
    ],
    [
      "[]",
      0
    ],
    [
      "[[[]]]][][]][[]]][[[",
      2
    ]
  ]
)('should work %#', (input, output) => {
  expect(minSwaps(input)).toBe(output)
})
