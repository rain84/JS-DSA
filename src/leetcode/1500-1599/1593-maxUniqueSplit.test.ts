import { maxUniqueSplit } from './1593-maxUniqueSplit'

it.each(
  //  prettier-ignore
  [
    [
      "ababccc",
      5
    ],
    [
      "aba",
      2
    ],
    [
      "aa",
      1
    ],
    [
      "wwwzfvedwfvhsww",
      11
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxUniqueSplit(input)).toBe(output)
})
