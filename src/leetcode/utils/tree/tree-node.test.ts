import { TreeNode } from './tree-node'

it('TreeNode should exist', () => {
  let node = new TreeNode()
  expect(node.val).toBe(0)
  expect(node.left).toBeNull()
  expect(node.right).toBeNull()

  node = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  expect(node.val).toBe(1)
  expect(node.left?.val).toBe(2)
  expect(node.right?.val).toBe(3)
})
