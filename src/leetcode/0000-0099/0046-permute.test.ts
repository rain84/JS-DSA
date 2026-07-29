import { permute, permute2, permute3 } from './0046-permute'
import { sort } from './util'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3],
      [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    ],
    [
      [0,1],
      [[0,1],[1,0]]
    ],
    [
      [1],
      [[1]]
    ]
  ]
)('should work %#', (input, output) => {
  expect(sort(permute(input))).toBe(sort(output))
  expect(sort(permute2(input))).toBe(sort(output))
  expect(sort(permute3(input))).toBe(sort(output))
})
