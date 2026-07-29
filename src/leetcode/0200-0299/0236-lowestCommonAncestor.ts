import type { TreeNode } from '../utils/tree'

/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * {@link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree | Link}
 *
 */
export function lowestCommonAncestor(root: T, p: T, q: T): T {
  if (!root || root === p || root === q) return root

  const left = lowestCommonAncestor(root?.left, p, q)
  const right = lowestCommonAncestor(root?.right, p, q)

  return left && right ? root : left || right
}

// My 1st working solution :)
export function lowestCommonAncestor2(root: T, p: T, q: T): T {
  if (!root) return null

  const dfs = (node: T, found: T = null): T => {
    if (!node) return null

    if (node === p || node === q) {
      // one node in the sub-tree of another node
      if (found) return found
      found = node === p ? p : q
    }

    const foundLeft = dfs(node?.left, found)
    const foundRight = dfs(node?.right, found)

    // 2nd node did not found in the sub-tree
    if (!foundLeft && !foundRight && (node === p || node === q)) return node

    // p and q are coming from the 2 different branches
    if (foundLeft && foundRight) return node

    return foundLeft || foundRight
  }

  return dfs(root)
}

type T = TreeNode | null
