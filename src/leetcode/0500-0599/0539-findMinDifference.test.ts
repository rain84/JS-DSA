import { findMinDifference } from './0539-findMinDifference'

it.each(
  //  prettier-ignore
  [
    [
      ["23:59","00:00"],
      1
    ],
    [
      ["00:00","23:59","00:00"],
      0
    ],
    [
      ["01:01","02:01","03:00"],
      59
    ],
    [
      ["12:12","00:13"],
      719
    ]
  ]
)('should work %#', (input, output) => {
  expect(findMinDifference(input)).toBe(output)
})
