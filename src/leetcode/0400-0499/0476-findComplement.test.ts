import { findComplement } from './0476-findComplement'

it.each(
  //  prettier-ignore
  [
    [
      5,
      2
    ],
    [
      1,
      0
    ]
  ]
)('should work %#', (input, output) => {
  expect(findComplement(input)).toBe(output)
})
