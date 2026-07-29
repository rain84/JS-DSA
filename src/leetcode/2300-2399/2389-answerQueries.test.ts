import { answerQueries, answerQueries2, answerQueries3 } from './2389-answerQueries'

it.each(
  //  prettier-ignore
  [
    [
      [4,5,2,1], [3,10,21,23],
      [2,3,4,4]
    ],
    [
      [2,3,4,5], [1],
      [0]
    ],
    [
      [4,5,2,1], [3,10,21],
      [2,3,4]
    ],
    [
      [736411,184882,914641,37925,214915], [331244,273144,118983,118252,305688,718089,665450],
      [2,2,1,1,2,3,3]
    ],
    [
      [1000000], [1000000],
      [1]
    ]
  ]
)('should work %#', (nums, queries, output) => {
  expect(answerQueries([...nums], [...queries])).toMatchObject(output)
  expect(answerQueries2(nums, queries)).toMatchObject(output)
  expect(answerQueries3(nums, queries)).toMatchObject(output)
})
