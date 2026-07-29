import { search } from './0704-search'

it.each(
  //  prettier-ignore
  [
    [
      [-1,0,3,5,9,12], 9,
      4
    ],
    [
      [-1,0,3,5,9,12], 2,
      -1
    ],
  ]
)('should work %#', (arr, target, output) => {
  expect(search(arr, target)).toBe(output)
})
