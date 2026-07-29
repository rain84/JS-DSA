import { diffWaysToCompute } from './0241-diffWaysToCompute'

it.each(
  //  prettier-ignore
  [
    [
      "2-1-1",
      [0,2]
    ],
    [
      "2*3-4*5",
      [-34,-14,-10,-10,10]
    ]
  ]
)('should work %#', (input, output) => {
  expect(sort(diffWaysToCompute(input))).toMatchObject(sort(output))
})

const sort = (nums: number[]) => nums.sort((a, b) => a - b)
