import { TreeNode } from '../utils/tree'

/**
 * 701. Insert into a Binary Search Tree
 * {@link https://leetcode.com/problems/insert-into-a-binary-search-tree/ | Link}
 *
 */
export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val)

  if (val < root.val) root.left = insertIntoBST(root.left, val)
  else root.right = insertIntoBST(root.right, val)

  return root
}
