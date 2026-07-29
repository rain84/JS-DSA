import { maximumUnits } from './1710-maximumUnits'

it.each(
  //  prettier-ignore
  [
    [
      [[1,3],[2,2],[3,1]], 4,
      8
    ],
    [
      [[5,10],[2,5],[4,7],[3,9]], 10, 
      91
    ],
  ]
)('should work %#', (boxTypes, truckSize, output) => {
  expect(maximumUnits(boxTypes, truckSize)).toBe(output)
})
