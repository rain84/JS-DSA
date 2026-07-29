import { topKFrequent, topKFrequent2 } from './0347-topKFrequent'

it.each(
  //  prettier-ignore
  [
    [
      [1,1,1,2,2,3], 2,
      [1,2]
    ],
    [
      [1], 1,
      [1]
    ],
    [
      [1,1,1,2,2,3], 2,
      [1,2]
    ],
  ]
)('should work %#', (nums, k, output) => {
  expect(topKFrequent(nums, k)).toMatchObject(output)
  expect(topKFrequent2(nums, k)).toMatchObject(output)
})
