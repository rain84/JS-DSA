import { shiftingLetters } from './2381-shiftingLetters'

it.each(
  //  prettier-ignore
  [
    [
      "abc", [[0,1,0],[1,2,1],[0,2,1]],
      "ace"
    ],
    [
      "dztz", [[0,0,0],[1,1,1]],
      "catz"
    ]
  ]
)('should work %#', (s, shifts, output) => {
  expect(shiftingLetters(s, shifts)).toBe(output)
})
