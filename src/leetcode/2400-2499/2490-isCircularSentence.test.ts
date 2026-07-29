import { isCircularSentence } from './2490-isCircularSentence'

it.each(
  //  prettier-ignore
  [
    [
      "leetcode exercises sound delightful",
      true
    ],
    [
      "eetcode",
      true
    ],
    [
      "Leetcode is cool",
      false
    ]
  ]
)('should work %#', (input, output) => {
  expect(isCircularSentence(input)).toBe(output)
})
