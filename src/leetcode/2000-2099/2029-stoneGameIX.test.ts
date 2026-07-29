import { stoneGameIX } from './2029-stoneGameIX'

it.each(
  //  prettier-ignore
  [
    [
      [2, 3],
      false
    ],
    [
      [2, 1],
      true
    ],
    [
      [2],
      false
    ],
    [
      [5, 1, 2, 4, 3],
      false
    ],
    [
      [2],
      false
    ],
    [
      [15,20,10,13,14,15,5,2,3],
      false
    ]
  ]
)('should work %#', (input, output) => {
  expect(stoneGameIX(input)).toBe(output)
})
