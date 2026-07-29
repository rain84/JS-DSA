import { createTree2, getTreeValues } from '../utils/tree'
import { replaceValueInTree, replaceValueInTree2 } from './2641-replaceValueInTree'

it.each(
  //  prettier-ignore
  [
    [
      [5,4,9,1,10,null,7],
      [0,0,0,7,7,11]
    ],
    [
      [3,1,2],
      [0,0,0]
    ]
  ]
)('should work %#', (input, output) => {
  const tree1 = replaceValueInTree(createTree2(input))
  const tree2 = replaceValueInTree2(createTree2(input))
  expect(getTreeValues.bfs(tree1)).toMatchObject(output)
  expect(getTreeValues.bfs(tree2)).toMatchObject(output)
})
