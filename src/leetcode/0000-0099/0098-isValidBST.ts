import type { TreeNode } from '../utils/tree'

/**
 * 98. Validate Binary Search Tree
 * {@link https://leetcode.com/problems/validate-binary-search-tree/ | Link}
 *
 */
export function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true

  let prev: TreeNode | null = null

  const dfs = (node: TreeNode | null): boolean => {
    if (!node) return true

    if (!dfs(node.left)) return false
    if (prev && prev.val >= node.val) return false
    prev = node

    return dfs(node.right)
  }

  return dfs(root)
}
