import { construct2DArray, construct2DArray2 } from './2022-construct2DArray'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4], 2, 2,
      [[1,2],[3,4]]
    ],
    [
      [1,2,3], 1, 3,
      [[1,2,3]]
    ],
    [
      [1,2], 1, 1,
      []
    ],
    [
      [1,1,1,1], 4, 1,
      [[1],[1],[1],[1]]
    ]
  ]
)('should work %#', (original, m, n, output) => {
  expect(construct2DArray(original, m, n)).toMatchObject(output)
  expect(construct2DArray2(original, m, n)).toMatchObject(output)
})
