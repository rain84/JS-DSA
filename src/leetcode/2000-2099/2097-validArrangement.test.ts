import { validArrangement } from './2097-validArrangement'

it.each(
  //  prettier-ignore
  [
    [
      [[5,1],[4,5],[11,9],[9,4]],
      [[11,9],[9,4],[4,5],[5,1]]
    ],
    [
      [[1,3],[3,2],[2,1]],
      [[1,3],[3,2],[2,1]]
    ],
    [
      [[1,2],[1,3],[2,1]],
      [[1,2],[2,1],[1,3]]
    ],
    [
      [[5,1],[4,5],[11,9],[9,4]],
      [[11,9],[9,4],[4,5],[5,1]]
    ]
  ]
)('should work %#', (input, output) => {
  expect(validArrangement(input)).toMatchObject(output)
})
