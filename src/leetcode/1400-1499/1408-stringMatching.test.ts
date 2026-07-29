import { stringMatching } from './1408-stringMatching'

it.each(
  //  prettier-ignore
  [
    [
      ["mass","as","hero","superhero"],
      ["as","hero"]
    ],
    [
      ["leetcode","et","code"],
      ["et","code"]
    ],
    [
      ["blue","green","bu"],
      []
    ]
  ]
)('should work %#', (input, output) => {
  expect(sort(stringMatching(input))).toMatchObject(sort(output))
})

const sort = (a: string[]) => a.toSorted((a, b) => a.localeCompare(b))
