import { restoreMatrix } from './1605-restoreMatrix'

it.each(
  //  prettier-ignore
  [
    [
       [3,8], [4,7],
    ],
    [
      [5,7,10], [8,6,8],
    ]
  ]
)('should work %#', (rowSum, colSum) => {
  const matrix = restoreMatrix([...rowSum], [...colSum])
  expect(check(matrix, rowSum, colSum)).toBeTruthy()
})

export function check(matrix: number[][], rowSum: number[], colSum: number[]) {
  for (let i = 0; i < rowSum.length; i++) {
    if (matrix[i].reduce((a, b) => a + b) !== rowSum[i]) return false
  }

  for (let j = 0; j < colSum.length; j++) {
    let sum = 0
    for (let i = 0; i < rowSum.length; i++) {
      sum += matrix[i][j]
    }
    if (sum !== colSum[j]) return false
  }

  return true
}
