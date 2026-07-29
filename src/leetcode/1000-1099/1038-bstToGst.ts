import { TreeNode } from '../utils/tree'

/**
 * 1038. Binary Search Tree to Greater Sum Tree
 * {@link https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/ | Link}
 */
export function bstToGst(root: TreeNode | null): TreeNode | null {
  const dfs = (node: TreeNode | null, sum = 0): number => {
    if (!node) return sum

    sum = dfs(node.right, sum)
    node.val += sum
    sum = node.val

    return dfs(node.left, sum)
  }

  dfs(root)

  return root
}
