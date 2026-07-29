import type { TreeNode } from '../utils/tree'

/**
 * 103. Binary Tree Zigzag Level Order Traversal
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/707/traversals-trees-graphs/4621/ | Link}
 *
 */
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const res: number[][] = []
  let queue = [root]
  let order = false

  while (queue.length) {
    const nextQueue: TreeNode[] = []
    const row: number[] = []

    for (const { left, right, val } of queue) {
      row.push(val)

      if (order) {
        if (left) nextQueue.push(left)
        if (right) nextQueue.push(right)
      } else {
        if (right) nextQueue.push(right)
        if (left) nextQueue.push(left)
      }
    }

    res.push(row)
    order = !order
    queue = nextQueue
  }

  return res
}
