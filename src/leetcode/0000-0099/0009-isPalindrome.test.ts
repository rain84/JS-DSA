import { isPalindrome, isPalindrome2 } from './0009-isPalindrome'

it.each(
  [
    [121, true],
    [-121, false],
    [10 ,false]
  ]
)('isPalindrome should work %#', (input, output) => {
  expect(isPalindrome(input)).toBe(output)
})

it.each(
  [
    [121, true],
    [-121, false],
    [10 ,false]
  ]
)('isPalindrome2 should work %#', (input, output) => {
  expect(isPalindrome2(input)).toBe(output)
})
