import { chalkReplacer } from './1894-chalkReplacer'

it.each(
  //  prettier-ignore
  [
    [
      [5,1,5], 22,
      0
    ],
    [
      [3,4,1,2], 25,
      1
    ]
  ]
)('should work %#', (chalk, k, output) => {
  expect(chalkReplacer(chalk, k)).toBe(output)
})
