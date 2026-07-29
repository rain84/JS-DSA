import { kClosest } from './0973-kClosest'

it.each(
  //  prettier-ignore
  [
    [
      [[1,3],[-2,2]], 1,
      [[-2,2]]
    ],
    [
      [[3,3],[5,-1],[-2,4]], 2,
      [[3,3],[-2,4]]
    ],
  ]
)('should work %#', (arr, k, output) => {
  expect(kClosest(arr, k)).toMatchObject(output)
})
