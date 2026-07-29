import type { TreeNode } from '../utils/tree'

/**
 * 543. Diameter of Binary Tree
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/707/traversals-trees-graphs/4669/ | Link}
 */
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let path = 0

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)
    path = Math.max(path, left + right)

    return Math.max(left, right) + 1
  }

  dfs(root)

  return path
}
