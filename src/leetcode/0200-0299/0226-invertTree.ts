import type { TreeNode } from '../utils/tree'

/**
 * 226. Invert Binary Tree
 * {@link https://leetcode.com/problems/invert-binary-tree/ | Link}
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  ;[root.left, root.right] = [root.right, root.left]

  invertTree(root?.right)
  invertTree(root?.left)

  return root
}
