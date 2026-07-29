import { smallestRange } from './0632-smallestRange'

it.each(
  //  prettier-ignore
  [
    [
      [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]],
      [20,24]
    ],
    [
      [[1,2,3],[1,2,3],[1,2,3]],
      [1,1]
    ]
  ]
)('should work %#', (input, output) => {
  expect(smallestRange(input)).toMatchObject(output)
})
