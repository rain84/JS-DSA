import { minLength, minLength2, minLength3 } from './2696-minLength'

it.each(
  //  prettier-ignore
  [
    [
      "ABFCACDB",
      2
    ],
    [
      "ACBBD",
      5
    ]
  ]
)('should work %#', (input, output) => {
  expect(minLength(input)).toBe(output)
  expect(minLength2(input)).toBe(output)
  expect(minLength3(input)).toBe(output)
})
