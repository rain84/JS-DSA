import { TreeNode } from '../utils/tree'

/**
 * {@link https://leetcode.com/problems/binary-tree-postorder-traversal/ | 145. Binary Tree Postorder Traversal}
 *
 * Topics: Stack | Tree | Depth-First Search | Binary Tree
 */
export function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []

  const dfs = (node: TreeNode | null) => {
    if (!node) return

    dfs(node.left)
    dfs(node.right)
    res.push(node.val)
  }

  dfs(root)

  return res
}
