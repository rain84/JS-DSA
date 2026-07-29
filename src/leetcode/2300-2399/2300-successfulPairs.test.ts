import { successfulPairs } from './2300-successfulPairs'

it.each(
  //  prettier-ignore
  [
    [
      [5, 1, 3], [1, 2, 3, 4, 5], 7,
      [4, 0, 3]
    ],
    [
      [3, 1, 2], [8, 5, 8], 16,
      [2, 0, 2]
    ],
  ]
)('should work %#', (spells, potions, success, output) => {
  expect(successfulPairs(spells, potions, success)).toMatchObject(output)
})
