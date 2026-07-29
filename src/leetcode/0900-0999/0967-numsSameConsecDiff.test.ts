import { numsSameConsecDiff } from './0967-numsSameConsecDiff'

it.each(
  //  prettier-ignore
  [
    [
      3, 7,
      [181,292,707,818,929]
    ],
    [
      2, 1,
      [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
    ],
    [
      2, 0,
      [11,22,33,44,55,66,77,88,99]
    ]
  ]
)('should work %#', (n, k, output) => {
  expect(sort(numsSameConsecDiff(n, k))).toMatchObject(sort(output))
})

const sort = (x: number[]) => x.sort((a, b) => a - b)
