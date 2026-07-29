import { punishmentNumber } from './2698-punishmentNumber'

it.each(
  //  prettier-ignore
  [
    [
      10,
      182
    ],
    [
      37,
      1478
    ]
  ]
)('should work %#', (input, output) => {
  expect(punishmentNumber(input)).toBe(output)
})
