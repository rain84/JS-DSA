/**
 * {@link https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree | 1261. Find Elements in a Contaminated Binary Tree}
 *
 * Topics: Hash Table | Tree | Depth-First Search | Breadth-First Search | Design | Binary Tree |
 */

import { TreeNode } from '../utils/tree'

export class FindElements {
  readonly #vals = new Set<number>()

  constructor(root: TreeNode) {
    root.val = 0

    const dfs = (node: TreeNode | null, x = 0) => {
      if (!node) return

      this.#vals.add(x)
      dfs(node.left, x * 2 + 1)
      dfs(node.right, x * 2 + 2)
    }

    dfs(root)
  }

  find(target: number): boolean {
    return this.#vals.has(target)
  }
}
