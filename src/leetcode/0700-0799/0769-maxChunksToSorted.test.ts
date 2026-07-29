import { maxChunksToSorted } from './0769-maxChunksToSorted'

it.each(
  //  prettier-ignore
  [
    [
      [4,3,2,1,0],
      1
    ],
    [
      [1,0,2,3,4],
      4
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxChunksToSorted(input)).toBe(output)
})
