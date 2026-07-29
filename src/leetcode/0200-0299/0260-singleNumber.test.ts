import { singleNumber, singleNumber2 } from './0260-singleNumber'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,1,3,2,5],
      [3,5]
    ],
    [
      [-1,0],
      [-1,0]
    ],
    [
      [0,1],
      [0, 1]
    ]
  ]
)('should work %#', (input, output) => {
  expect(sort(singleNumber(input))).toMatchObject(output)
  expect(sort(singleNumber2(input))).toMatchObject(output)
})

const sort = (nums: number[]) => nums.sort((a, b) => a - b)
