import { deserialize, serialize } from 'numstree'
import { reverseOddLevels } from './2415-reverseOddLevels'

it.each(
  //  prettier-ignore
  [
    [
      [2,3,5,8,13,21,34],
      [2,5,3,8,13,21,34]
    ],
    // [
    //   [7,13,11],
    //   [7,11,13]
    // ],
    // [
    //   [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2],
    //   [0,2,1,0,0,0,0,2,2,2,2,1,1,1,1]
    // ]
  ]
)('should work %#', (input, output) => {
  const tree = deserialize(input)
  const arr = serialize(reverseOddLevels(tree))
  expect(arr).toMatchObject(output)
})
