import { isPrefixOfWord } from './1455-isPrefixOfWord'

it.each(
  //  prettier-ignore
  [
    [
      "i love eating burger", "burg",
      4
    ],
    [
      "this problem is an easy problem", "pro",
      2
    ],
    [
      "i am tired", "you",
      -1
    ]
  ]
)('should work %#', (sentence, searchWord, output) => {
  expect(isPrefixOfWord(sentence, searchWord)).toBe(output)
})
