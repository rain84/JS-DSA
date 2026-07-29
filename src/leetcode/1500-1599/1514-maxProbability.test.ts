import { maxProbability } from './1514-maxProbability'

it.each(
  //  prettier-ignore
  [
    [
      3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.2], 0, 2,
      0.25000
    ],
    [
      3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.3], 0, 2,
      0.30000
    ],
    [
      3, [[0,1]], [0.5], 0, 2,
      0
    ]
  ]
)('should work %#', (n, edges, successProb, start, end, output) => {
  expect(maxProbability(n, edges, successProb, start, end)).toBe(output)
})
