import {
  minimumDeletions,
  minimumDeletions2,
  minimumDeletions3,
  minimumDeletions4,
  minimumDeletions5,
  minimumDeletions6,
} from './1653-minimumDeletions'

it.each(
  //  prettier-ignore
  [
    [
      "aababbab",
      2
    ],
    [
      "bbaaaaabb",
      2
    ],
    [
      "b",
      0
    ]
  ]
)('should work %#', (input, output) => {
  expect(minimumDeletions(input)).toBe(output)
  expect(minimumDeletions2(input)).toBe(output)
  expect(minimumDeletions3(input)).toBe(output)
  expect(minimumDeletions4(input)).toBe(output)
  expect(minimumDeletions5(input)).toBe(output)
  expect(minimumDeletions6(input)).toBe(output)
})
