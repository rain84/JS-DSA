import type { TreeNode } from '../utils/tree'

/**
 * 1026. Maximum Difference Between Node and Ancestor
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/707/traversals-trees-graphs/4617/ | Link}
 *
 */
export function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) return 0

  const dfs = (
    node: TreeNode | null,
    max = Number.NEGATIVE_INFINITY,
    min = Number.POSITIVE_INFINITY
  ): number => {
    if (!node) return Math.abs(max - min)

    max = Math.max(node.val, max)
    min = Math.min(node.val, min)

    const left = dfs(node.left, max, min)
    const right = dfs(node.right, max, min)

    return Math.max(left, right)
  }

  return dfs(root)
}
