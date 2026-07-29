import { findTheLongestSubstring } from './1371-findTheLongestSubstring'

it.each(
  //  prettier-ignore
  [
    [
      "eleetminicoworoep",
      13
    ],
    [
      "leetcodeisgreat",
      5
    ],
    [
      "bcbcbc",
      6
    ]
  ]
)('should work %#', (input, output) => {
  expect(findTheLongestSubstring(input)).toBe(output)
})
