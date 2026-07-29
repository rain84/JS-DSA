import type { TreeNode } from '../utils/tree'

/**
 * 938. Range Sum of BST
 * {@link https://leetcode.com/problems/range-sum-of-bst/ | Link}
 *
 */
export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) return 0

  const { left, right, val } = root
  let sum = 0

  if (low < val) sum += rangeSumBST(left, low, high)
  if (low <= val && val <= high) sum += val
  if (val < high) sum += rangeSumBST(right, low, high)

  return sum
}
