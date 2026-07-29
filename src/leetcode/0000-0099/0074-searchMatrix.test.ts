import { searchMatrix } from './0074-searchMatrix'

it.each(
  //  prettier-ignore
  [
    [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ], 3,
      true
    ],
    [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ], 13,
      false
    ],
  ]
)('should work %#', (matrix, target, output) => {
  expect(searchMatrix(matrix, target)).toBe(output)
})
