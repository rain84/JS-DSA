import { maxEqualRowsAfterFlips } from './1072-maxEqualRowsAfterFlips'

it.each(
  //  prettier-ignore
  [
    [
      [[0,1],[1,1]],
      1
    ],
    [
      [[0,1],[1,0]],
      2
    ],
    [
      [[0,0,0],[0,0,1],[1,1,0]],
      2
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxEqualRowsAfterFlips(input)).toBe(output)
})
