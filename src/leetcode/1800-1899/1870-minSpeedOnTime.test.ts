import { minSpeedOnTime } from './1870-minSpeedOnTime'

it.each(
  //  prettier-ignore
  [
    [
      [1,3,2], 6,
      1
    ],
    [
      [1,3,2], 2.7,
      3
    ],
    [
      [1,3,2], 1.9,
      -1
    ],
    [
      [1,1,100000], 2.01,
      10000000
    ]
  ]
)('should work %#', (dist, hour, output) => {
  expect(minSpeedOnTime(dist, hour)).toBe(output)
})
