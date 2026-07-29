import { maximumCount } from './2529-maximumCount'

it.each(
  //  prettier-ignore
  [
    [
      [-2,-1,-1,1,2,3],
      3
    ],
    [
      [-3,-2,-1,0,0,1,2],
      3
    ],
    [
      [5,20,66,1314],
      4
    ]
  ]
)('should work %#', (input, output) => {
  expect(maximumCount(input)).toBe(output)
})
