import { TreeNode } from '../utils/tree'

/**
 * {@link https://leetcode.com/problems/reverse-odd-levels-of-binary-tree | 2415. Reverse Odd Levels of Binary Tree}
 *
 * Topics: Tree | Depth-First Search | Breadth-First Search | Binary Tree
 */
export function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  const vals: Record<number, number[]> = {}

  const dfs = (node: TreeNode | null, level = 0): void => {
    if (!node) return

    if (level & 1) {
      vals[level] ??= []
      vals[level].push(node.val)
    }

    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }

  const dfs2 = (node: TreeNode | null, level = 0): void => {
    if (!node) return

    if (level & 1) {
      node.val = vals[level]?.pop() ?? 0
    }

    dfs2(node.left, level + 1)
    dfs2(node.right, level + 1)
  }

  dfs(root)
  dfs2(root)

  return root
}
