import { arrayRankTransform, arrayRankTransform2 } from './1331-arrayRankTransform'

it.each(
  //  prettier-ignore
  [
    [
      [40,10,20,30],
      [4,1,2,3]
    ],
    [
      [100,100,100],
      [1,1,1]
    ],
    [
      [37,12,28,9,100,56,80,5,12],
      [5,3,4,2,8,6,7,1,3]
    ]
  ]
)('should work %#', (input, output) => {
  expect(arrayRankTransform(input)).toMatchObject(output)
  expect(arrayRankTransform2(input)).toMatchObject(output)
})
