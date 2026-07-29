import { maximizeSweetness } from './1231-maximizeSweetness'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4,5,6,7,8,9], 5,
      6
    ],
    [
      [5,6,7,8,9,1,2,3,4], 8,
      1
    ],
    [
      [1,2,2,1,2,2,1,2,2], 2,
      5
    ],
  ]
)('should work %#', (sweetness, k, output) => {
  expect(maximizeSweetness(sweetness, k)).toBe(output)
})
