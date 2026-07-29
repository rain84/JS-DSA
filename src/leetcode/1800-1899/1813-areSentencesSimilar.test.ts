import { areSentencesSimilar } from './1813-areSentencesSimilar'

it.each(
  //  prettier-ignore
  [
    [
      "My name is Haley", "My Haley",
      true
    ],
    [
      "of", "A lot of words",
      false
    ],
    [
      "Eating right now", "Eating",
      true
    ],
    [
      "qbaVXO Msgr aEWD v ekcb", "Msgr aEWD ekcb",
      false
    ],
    [
      "Ogn WtWj HneS", "Ogn WtWj HneS",
      true
    ]
  ]
)('should work %#', (sentence1, sentence2, output) => {
  expect(areSentencesSimilar(sentence1, sentence2)).toBe(output)
})
