import { countGoodTriplets } from './1534-countGoodTriplets'

it.each(
  //  prettier-ignore
  [
    [
      [3,0,1,1,9,7], 7, 2, 3,
      4
    ],
    [
      [1,1,2,2,3], 0, 0, 1,
      0
    ]
  ]
)('should work %#', (arr, a, b, c, output) => {
  expect(countGoodTriplets(arr, a, b, c)).toBe(output)
})
