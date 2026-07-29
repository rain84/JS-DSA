import { TreeNode } from '../utils/tree'

/**
 * 1382. Balance a Binary Search Tree
 * {@link https://leetcode.com/problems/balance-a-binary-search-tree/ | Link}
 */
export function balanceBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  const a: number[] = []
  const dfs = (node: TreeNode | null) => {
    if (!node) return

    dfs(node.left)
    a.push(node.val)
    dfs(node.right)
  }
  dfs(root)

  const createBalancedTree = (l: number, r: number): TreeNode | null => {
    const middle = (l + r) >> 1
    if (r < l) return null

    const left = createBalancedTree(l, middle - 1)
    const right = createBalancedTree(middle + 1, r)

    return new TreeNode(a[middle], left, right)
  }
  const res = createBalancedTree(0, a.length - 1)

  return res
}

export function balanceBST2(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  const nums: number[] = []
  const dfs = (node: TreeNode | null) => {
    if (!node) return

    dfs(node.left)
    nums.push(node.val)
    dfs(node.right)
  }
  dfs(root)

  const createBalancedTree = (nums: number[] = []): TreeNode | null => {
    if (!nums.length) return null

    const middle = nums.length >> 1
    const left = createBalancedTree(nums.slice(0, middle))
    const right = createBalancedTree(nums.slice(middle + 1))

    return new TreeNode(nums[middle], left, right)
  }
  const res = createBalancedTree(nums)

  return res
}
