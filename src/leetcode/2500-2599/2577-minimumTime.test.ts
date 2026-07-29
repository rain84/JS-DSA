import { minimumTime } from './2577-minimumTime'

it.each(
  //  prettier-ignore
  [
    [
      [[0,1,3,2],[5,1,2,5],[4,3,8,6]],
      7
    ],
    [
      [[0,2,4],[3,2,1],[1,0,4]],
      -1
    ]
  ]
)('should work %#', (input, output) => {
  expect(minimumTime(input)).toBe(output)
})
