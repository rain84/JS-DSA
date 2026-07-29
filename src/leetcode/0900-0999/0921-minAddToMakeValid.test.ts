import { minAddToMakeValid, minAddToMakeValid2 } from './0921-minAddToMakeValid'

it.each(
  //  prettier-ignore
  [
    [
      "())",
      1
    ],
    [
      "(((",
      3
    ],
    [
      "()))((",
      4
    ]
  ]
)('should work %#', (input, output) => {
  expect(minAddToMakeValid(input)).toBe(output)
  expect(minAddToMakeValid2(input)).toBe(output)
})
