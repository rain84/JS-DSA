import type { TreeNode } from '../utils/tree'

/**
 * 1448. Count Good Nodes in Binary Tree
 * {@link https://leetcode.com/problems/count-good-nodes-in-binary-tree/ | Link}
 *
 * Solved using a declarative approach
 */
export const goodNodes = (root: TreeNode | null): number => {
  const dfs = (root: TreeNode | null, max = Number.NEGATIVE_INFINITY): number => {
    if (!root) return 0

    max = Math.max(max, root.val)

    return Number(max === root.val) + dfs(root.left, max) + dfs(root.right, max)
  }

  return dfs(root)
}

/** Solved using an iterative approach */
export const goodNodes2 = (root: TreeNode): number => {
  const stack: [TreeNode | null, number][] = [[root, Number.NEGATIVE_INFINITY]]

  let res = 0
  for (let [node, max] of stack) {
    if (!node) continue

    if (node.val >= max) {
      max = node.val
      res++
    }
    stack.push([node.left, max])
    stack.push([node.right, max])
  }

  return res
}
