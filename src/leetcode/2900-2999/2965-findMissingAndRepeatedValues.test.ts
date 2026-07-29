import {
  findMissingAndRepeatedValues,
  findMissingAndRepeatedValues2,
} from './2965-findMissingAndRepeatedValues'

it.each(
  //  prettier-ignore
  [
    [
      [[1,3],[2,2]],
      [2,4]
    ],
    [
      [[9,1,7],[8,9,2],[3,4,6]],
      [9,5]
    ]
  ]
)('should work %#', (input, output) => {
  expect(findMissingAndRepeatedValues(input)).toMatchObject(output)
  expect(findMissingAndRepeatedValues2(input)).toMatchObject(output)
})
