import { sortArray } from './0912-sortArray'

it.each(
  //  prettier-ignore
  [
    [
      [5,2,3,1],
      [1,2,3,5]
    ],
    [
      [5,1,1,2,0,0],
      [0,0,1,1,2,5]
    ]
  ]
)('should work %#', (input, output) => {
  expect(sortArray(input)).toMatchObject(output)
})
