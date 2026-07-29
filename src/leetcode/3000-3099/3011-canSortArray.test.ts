import { canSortArray, canSortArray2 } from './3011-canSortArray'

it.each(
  //  prettier-ignore
  [
    [
      [8,4,2,30,15],
      true
    ],
    [
      [1,2,3,4,5],
      true
    ],
    [
      [3,16,8,4,2],
      false
    ]
  ]
)('should work %#', (input, output) => {
  expect(canSortArray(input)).toBe(output)
  expect(canSortArray2(input)).toBe(output)
})
