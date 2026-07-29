import { TreeNode } from '../utils/tree'

/**
 * {@link https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries | 2458. Height of Binary Tree After Subtree Removal Queries}
 *
 * Topics: Array | Tree | Depth-First Search | Breadth-First Search | Binary Tree
 */
export function treeQueries(root: TreeNode | null, queries: number[]): number[] {
  const res: number[] = []
  const levels: Map<number, [number, number][]> = new Map()
  const valToLevel = new Map<number, number>()

  const dfs = (node: TreeNode | null, level = 0): number => {
    if (!node) return level - 1

    const max = Math.max(dfs(node.left, level + 1), dfs(node.right, level + 1))

    if (!levels.has(level)) {
      levels.set(level, [])
    }
    levels.get(level)?.push([max, node.val])
    valToLevel.set(node.val, level)

    return max
  }

  dfs(root, 0)

  for (const [_, l] of levels) {
    l.sort(([a], [b]) => b - a)
  }

  for (const q of queries) {
    const level = valToLevel.get(q)!
    const maxes = levels.get(level)!

    if (maxes.length === 1) {
      res.push(level - 1)
    } else {
      const [val0, max0, max1] = [maxes[0][1], maxes[0][0], maxes[1][0]]
      const max = val0 === q ? max1 : max0
      res.push(max)
    }
  }

  return res
}
