import type { TreeNode } from '../utils/tree'

/**
 * 530. Minimum Absolute Difference in BST
 * {@link https://leetcode.com/problems/minimum-absolute-difference-in-bst/ | Link}
 *
 */
export function getMinimumDifference(root: TreeNode | null): number {
  if (!root) return 0

  let prev = Number.MIN_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER

  const dfs = (node: TreeNode | null) => {
    if (!node) return

    dfs(node.left)
    min = Math.min(min, node.val - prev)
    prev = node.val
    dfs(node.right)
  }

  dfs(root)

  return min
}

export function getMinimumDifference2(root: TreeNode | null): number {
  if (!root) return 0

  const xs: number[] = []
  const dfs = (node: TreeNode | null) => {
    if (!node) return

    dfs(node.left)
    xs.push(node.val)
    dfs(node.right)
  }

  dfs(root)
  let min = Number.MAX_SAFE_INTEGER

  for (let i = 1; i < xs.length; i++) {
    min = Math.min(min, xs[i] - xs[i - 1])
  }

  return min
}
