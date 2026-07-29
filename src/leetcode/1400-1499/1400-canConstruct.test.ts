import { canConstruct } from './1400-canConstruct'

it.each(
  //  prettier-ignore
  [
    [
      "annabelle", 2,
      true
    ],
    [
      "leetcode", 3,
      false
    ],
    [
      "true", 4,
      true
    ]
  ]
)('should work %#', (s, k, output) => {
  expect(canConstruct(s, k)).toBe(output)
})
