import { survivedRobotsHealths } from './2751-survivedRobotsHealths'

it.each(
  //  prettier-ignore
  [
    [
      [5, 4, 3, 2, 1], [2, 17, 9, 15, 10], 'RRRRR',
      [2, 17, 9, 15, 10]
    ],
    [
      [3, 5, 2, 6], [10, 10, 15, 12], 'RLRL',
      [14]
    ],
    [
      [1, 2, 5, 6], [10, 10, 11, 11], 'RLRL',
      []
    ],
    [
      [11, 44, 16], [1, 20, 17], "RLR",
      [18]
    ]
  ]
)('should work %#', (positions, healths, directions, output) => {
  expect(survivedRobotsHealths(positions, [...healths], directions)).toMatchObject(output)
})
