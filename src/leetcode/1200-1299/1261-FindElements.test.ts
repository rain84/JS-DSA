import { deserialize } from 'numstree'
import { FindElements } from './1261-FindElements'

it.each(
  //  prettier-ignore
  [
    [
      [-1,null,-1], [1, 2],
      [false,true]
    ],
    [
      [-1,-1,-1,-1,-1], [1, 3, 5],
      [true,true,false]
    ],
    [
      [-1,null,-1,-1,null,-1], [2, 3, 4, 5],
      [true,false,false,true]
    ]
  ]
)('should work %#', (arr, input, output) => {
  const tree = new FindElements(deserialize(arr))

  for (const x of input) {
    expect(tree.find(x)).toBe(output.shift())
  }
})
