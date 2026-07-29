import type { TreeNode } from '../utils/tree'

/**
 * 872. Leaf-Similar Trees
 * {@link https://leetcode.com/problems/leaf-similar-trees/ | Link}
 */
export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 || !root2) return false
  const a1: number[] = []
  const a2: number[] = []

  const dfs = (node: TreeNode | null, arr: number[]) => {
    if (!node) return
    if (!node.left && !node.right) {
      arr.push(node.val)
      return
    }

    dfs(node.left, arr)
    dfs(node.right, arr)
  }

  dfs(root1, a1)
  dfs(root2, a2)

  if (a1.length !== a2.length) return false
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false
  }

  return true
}

export function leafSimilar2(root1: TreeNode, root2: TreeNode): boolean {
  if (!root1 || !root2) return false

  const dfs = (node: TreeNode | null): string => {
    if (!node) return ''
    if (!node.left && !node.right) {
      // biome-ignore lint/style/useTemplate: <explanation>
      return node.val + '|'
    }

    return dfs(node.left) + dfs(node.right)
  }

  return dfs(root1) === dfs(root2)
}
