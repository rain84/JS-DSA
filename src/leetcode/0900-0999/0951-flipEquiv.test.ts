import { createTree } from '../utils/tree'
import { flipEquiv, flipEquiv2, flipEquiv3 } from './0951-flipEquiv'

it.each(
  //  prettier-ignore
  [
    [
      [], [],
      true
    ],
    [
      [], [1],
      false
    ]
  ]
)('should work %#', (root1, root2, output) => {
  const [tree1, tree2] = [createTree(root1), createTree(root2)]
  expect(flipEquiv(tree1, tree2)).toBe(output)
  expect(flipEquiv2(tree1, tree2)).toBe(output)
  expect(flipEquiv3(tree1, tree2)).toBe(output)
})
