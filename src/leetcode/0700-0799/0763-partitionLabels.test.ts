import { partitionLabels, partitionLabels2 } from './0763-partitionLabels'

it.each(
  //  prettier-ignore
  [
    [
      "ababcbacadefegdehijhklij",
      [9,7,8]
    ],
    [
      "eccbbbbdec",
      [10]
    ]
  ]
)('should work %#', (input, output) => {
  expect(partitionLabels(input)).toMatchObject(output)
  expect(partitionLabels2(input)).toMatchObject(output)
})
