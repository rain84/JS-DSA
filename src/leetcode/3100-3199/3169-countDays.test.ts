import { countDays } from './3169-countDays'

it.each(
  //  prettier-ignore
  [
    [
      10, [[5,7],[1,3],[9,10]],
      2
    ],
    [
      5, [[2,4],[1,3]],
      1
    ],
    [
      6, [[1,6]],
      0
    ],
    [
      57, [[3,49],[23,44],[21,56],[26,55],[23,52],[2,9],[1,48],[3,31]],
      1
    ]
  ]
)('should work %#', (days, meetings, output) => {
  expect(countDays(days, meetings)).toBe(output)
})
