import { uncommonFromSentences } from './0884-uncommonFromSentences'

it.each(
  //  prettier-ignore
  [
    [
      "this apple is sweet", "this apple is sour",
      ["sweet","sour"]
    ],
    [
      "apple apple", "banana",
      ["banana"]
    ]
  ]
)('should work %#', (s1, s2, output) => {
  expect(uncommonFromSentences(s1, s2)).toMatchObject(output)
})
