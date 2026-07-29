import {
  minCostClimbingStairs,
  minCostClimbingStairs2,
  minCostClimbingStairs3,
} from './0746-minCostClimbingStairs'

it.each(
  //  prettier-ignore
  [
    [
      [10,15,20],
      15
    ],
    [
      [1,100,1,1,1,100,1,1,100,1],
      6
    ],
    [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
      1
    ]
  ]
)('should work %#', (input, output) => {
  expect(minCostClimbingStairs(input)).toBe(output)
  expect(minCostClimbingStairs2(input)).toBe(output)
  expect(minCostClimbingStairs3(input)).toBe(output)
})
