import { reverseParentheses } from './1190-reverseParentheses'

it.each(
  //  prettier-ignore
  [
    [
      "(abcd)",
      "dcba"
    ],
    [
      "(u(love)i)",
      "iloveu"
    ],
    [
      "(ed(et(oc))el)",
      "leetcode"
    ]
  ]
)('should work %#', (input, output) => {
  expect(reverseParentheses(input)).toBe(output)
})
