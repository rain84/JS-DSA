import { rotateString, rotateString2 } from './0796-rotateString'

it.each(
  //  prettier-ignore
  [
    [
      "abcde", "cdeab",
      true
    ],
    [
      "abcde", "abced",
      false
    ]
  ]
)('should work %#', (s, goal, output) => {
  expect(rotateString(s, goal)).toBe(output)
  expect(rotateString2(s, goal)).toBe(output)
})
