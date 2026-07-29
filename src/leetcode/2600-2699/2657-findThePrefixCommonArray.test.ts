import { findThePrefixCommonArray } from './2657-findThePrefixCommonArray'

it.each(
  //  prettier-ignore
  [
    [
      [1,3,2,4], [3,1,2,4],
      [0,2,3,4]
    ],
    [
      [2,3,1], [3,1,2],
      [0,1,3]
    ]
  ]
)('should work %#', (A, B, output) => {
  expect(findThePrefixCommonArray(A, B)).toMatchObject(output)
})
