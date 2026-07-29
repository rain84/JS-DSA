import { isDefined } from 'typescript/utils'
import type { TreeNode } from '../utils/tree'

/**
 * 515. Find Largest Value in Each Tree Row
 * {@link https://leetcode.com/problems/find-largest-value-in-each-tree-row/ | Link}
 *
 */
export function largestValues(root: TreeNode | null): number[] {
  if (!root) return []

  const res: number[] = []
  let queue = [root]

  while (queue.length) {
    const nextQueue: TreeNode[] = []
    let max = queue[0]!.val

    for (const node of queue) {
      isDefined(node)

      if (node.left) nextQueue.push(node.left)
      if (node.right) nextQueue.push(node.right)

      max = Math.max(max, node.val)
    }

    res.push(max)
    queue = nextQueue
  }

  return res
}
