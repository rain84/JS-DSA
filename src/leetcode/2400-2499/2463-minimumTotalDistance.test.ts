import { minimumTotalDistance } from './2463-minimumTotalDistance'

it.each(
  //  prettier-ignore
  [
    [
      [0, 4, 6],
      [[2, 2], [6, 2]],
      4,
    ],
    [
      [1, -1],
      [[-2, 1], [2, 1]],
      2,
    ],
  ]
)('should work %#', (robot, factory, output) => {
  expect(minimumTotalDistance(robot, factory)).toBe(output)
})
