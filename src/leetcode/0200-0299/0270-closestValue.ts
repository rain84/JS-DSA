import type { TreeNode } from '../utils/tree'
/**
 * 270. Closest Binary Search Tree Value
 *  {@link https://leetcode.com/problems/closest-binary-search-tree-value/ | Link}
 *
 * 1st solution (closestValue) is better by the speed
 * than 2nd (closestValue2)
 */
export function closestValue(root: TreeNode | null, target: number): number {
  if (!root) return Number.NaN

  let res = 0
  let diff = Number.POSITIVE_INFINITY

  while (root) {
    const next = Math.abs(target - root.val)

    if (next < diff || (next === diff && root.val < res)) {
      diff = next
      res = root.val
    }

    root = target < root.val ? root.left : root.right
  }

  return res
}

/** Solved with DFS-recursion */
export function closestValue2(root: TreeNode | null, target: number): number {
  if (!root) return Number.NaN

  let res = 0
  let diff = Number.POSITIVE_INFINITY

  const dfs = (node: TreeNode | null): undefined => {
    if (!node) return

    const next = Math.abs(target - node.val)

    if (next < diff || (next === diff && node.val < res)) {
      diff = next
      res = node.val
    }

    node = target < node.val ? node.left : node.right

    return dfs(node)
  }

  dfs(root)

  return res
}
