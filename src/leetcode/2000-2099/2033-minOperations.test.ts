import { minOperations } from './2033-minOperations'

it.each(
  //  prettier-ignore
  [
    [
      [[2,4],[6,8]], 2,
      4
    ],
    [
      [[1,5],[2,3]], 1,
      5
    ],
    [
      [[1,2],[3,4]], 2,
      -1
    ],
    [
      [[146]], 86,
      0
    ],
    [
      [[931,128],[639,712]], 73,
      12
    ],
    [
      [[529,529,989],[989,529,345],[989,805,69]],
      92,
      25
    ]
  ]
)('should work %#', (grid, x, output) => {
  expect(minOperations(grid, x)).toBe(output)
})
