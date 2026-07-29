import { frequencySort } from './1636-frequencySort'

it.each(
  //  prettier-ignore
  [
    [
      [1,1,2,2,2,3],
      [3,1,1,2,2,2]
    ],
    [
      [2,3,1,3,2],
      [1,3,3,2,2]
    ],
    [
      [-1,1,-6,4,5,-6,1,4,1],
      [5,-1,4,4,-6,-6,1,1,1]
    ]
  ]
)('should work %#', (input, output) => {
  expect(frequencySort(input)).toMatchObject(output)
})
