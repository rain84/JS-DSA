import { minDifference } from './1509-minDifference'

it.each(
  //  prettier-ignore
  [
    [
      [5,3,2,4], 
      0
    ],
    [
      [1,5,0,10,14],
      1
    ],
    [
      [3,100,20],
      0
    ],
  ]
)('should work %#', (input, output) => {
  expect(minDifference(input)).toBe(output)
})
