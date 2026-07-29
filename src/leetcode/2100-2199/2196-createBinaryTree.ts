import { TreeNode, visualizeTree } from '../utils/tree'

/**
 * 2196. Create Binary Tree From Descriptions
 * {@link https://leetcode.com/problems/create-binary-tree-from-descriptions/ | Link}
 */
export function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const nodes: Record<number, TreeNode> = {}
  const children = new Set<number>()

  for (const [parent, child] of descriptions) {
    if (!nodes[parent]) nodes[parent] = new TreeNode(parent)
    if (!nodes[child]) nodes[child] = new TreeNode(child)

    children.add(child)
  }

  let root = -1
  for (const [parent, child, isLeft] of descriptions) {
    if (!children.has(parent)) root = parent

    if (isLeft) nodes[parent].left = nodes[child]
    else nodes[parent].right = nodes[child]
  }

  return nodes[root]
}
