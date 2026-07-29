import { removeOccurrences } from './1910-removeOccurrence'

it.each(
  //  prettier-ignore
  [
    [
      "daabcbaabcbc", "abc",
      "dab"
    ],
    [
      "axxxxyyyyb", "xy",
      "ab"
    ]
  ]
)('should work %#', (s, part, output) => {
  expect(removeOccurrences(s, part)).toBe(output)
})
