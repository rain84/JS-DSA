import { prefixCount } from './2185-prefixCount'

it.each(
  //  prettier-ignore
  [
    [
      ["pay","attention","practice","attend"], "at",
      2
    ],
    [
      ["leetcode","win","loops","success"], "code",
      0
    ]
  ]
)('should work %#', (words, pref, output) => {
  expect(prefixCount(words, pref)).toBe(output)
})
