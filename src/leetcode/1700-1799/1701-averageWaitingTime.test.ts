import { averageWaitingTime } from './1701-averageWaitingTime'

it.each(
  //  prettier-ignore
  [
    [
      [[1,2],[2,5],[4,3]],
      5.00000
    ],
    [
      [[5,2],[5,4],[10,3],[20,1]],
      3.25000
    ]
  ]
)('should work %#', (input, output) => {
  expect(averageWaitingTime(input)).toBe(output)
})
