import { stoneGameII } from './1140-stoneGameII'

it.each(
  //  prettier-ignore
  [
    [
      [2,7,9,4,4],
      10
    ],
    [
      [1,2,3,4,5,100],
      104
    ]
  ]
)('should work %#', (input, output) => {
  expect(stoneGameII(input)).toBe(output)
})
