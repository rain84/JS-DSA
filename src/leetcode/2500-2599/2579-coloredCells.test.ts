import { coloredCells, coloredCells2 } from './2579-coloredCells'

it.each(
  //  prettier-ignore
  [
    [
      1,
      1
    ],
    [
      2,
      5
    ]
  ]
)('should work %#', (input, output) => {
  expect(coloredCells(input)).toBe(output)
  expect(coloredCells2(input)).toBe(output)
})
