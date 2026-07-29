import { longestCommonPrefix } from './3043-longestCommonPrefix'

it.each(
  //  prettier-ignore
  [
    [
      [1,10,100], [1000],
      3
    ],
    [
      [1,2,3], [4,4,4],
      0
    ]
  ]
)('should work %#', (arr1, arr2, output) => {
  expect(longestCommonPrefix(arr1, arr2)).toBe(output)
})
