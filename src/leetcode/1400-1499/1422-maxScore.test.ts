import { maxScore } from './1422-maxScore'

it.each(
  //  prettier-ignore
  [
    [
      "011101",
      5
    ],
    [
      "00111",
      5
    ],
    [
      "1111",
      3
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxScore(input)).toBe(output)
})
