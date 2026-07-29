import { minimumSteps, minimumSteps2, minimumSteps3 } from './2938-minimumSteps'

it.each(
  //  prettier-ignore
  [
    [
      "101",
      1
    ],
    [
      "100",
      2
    ],
    [
      "0111",
      0
    ],
    [
      "11000111",
      6
    ]
  ]
)('should work %#', (input, output) => {
  expect(minimumSteps(input)).toBe(output)
  expect(minimumSteps2(input)).toBe(output)
  expect(minimumSteps3(input)).toBe(output)
})
