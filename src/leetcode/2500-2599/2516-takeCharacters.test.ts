import { takeCharacters } from './2516-takeCharacters'

it.each(
  //  prettier-ignore
  [
    [
      "aabaaaacaabc", 2,
      8
    ],
    [
      "a", 1,
      -1
    ],
    [
      "abc", 0,
      0
    ]
  ]
)('should work %#', (s, k, output) => {
  expect(takeCharacters(s, k)).toBe(output)
})
