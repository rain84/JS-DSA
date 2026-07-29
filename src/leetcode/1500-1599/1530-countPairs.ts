import { type TreeNode } from '../utils/tree'

/**
 * 1530. Number of Good Leaf Nodes Pairs
 * {@link https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/ | Link}
 *
 * Solved with 'Lowest Common Ancestor'-approach
 */
export function countPairs(root: TreeNode | null, distance: number): number {
  const pairs: number[][] = []

  const dfs = (node: TreeNode | null): number[][] => {
    if (!node) return []
    if (!node.left && !node.right) return [[node.val, 1]]

    const left = dfs(node.left)
    const right = dfs(node.right)

    for (const [x, dx] of left) {
      for (const [y, dy] of right) {
        if (dx + dy <= distance) {
          pairs.push([x, y])
        }
      }
    }

    const res: number[][] = []
    for (const arr of [left, right]) {
      for (const x of arr) {
        if (++x[1] <= distance) res.push(x)
      }
    }

    return res
  }

  dfs(root)

  return pairs.length
}

/**
 * BFS, almost works )
 */
export function countPairs2(root: TreeNode | null, distance: number): number {
  const leafs = new Set<TreeNode>()
  const matrix = new Map<TreeNode, TreeNode[]>()

  const dfs = (node: TreeNode | null) => {
    if (!node) return

    if (!node.left && !node.right) {
      leafs.add(node)
    }

    for (const child of [node.left, node.right]) {
      if (!child) continue
      ;(matrix.get(node) ?? matrix.set(node, []).get(node))?.push(child)
      ;(matrix.get(child) ?? matrix.set(child, []).get(child))?.push(node)

      dfs(child)
    }
  }

  dfs(root)

  const pairs: TreeNode[][] = []
  const hash = new Set<string>()
  for (const leaf of leafs) {
    let q = matrix.get(leaf)
    let depth = 1

    const seen = new Set<TreeNode>([leaf])
    while (q?.length) {
      const qNext: TreeNode[] = []
      if (depth > distance) break

      for (const x of q) {
        if (seen.has(x)) continue
        seen.add(x)

        if (leafs.has(x) && !hash.has(leaf.val + '.' + x.val)) {
          pairs.push([leaf, x])
          hash.add(leaf.val + '.' + x.val)
          hash.add(x.val + '.' + leaf.val)
        }

        qNext.push(...(matrix?.get(x) ?? []))
      }

      q = qNext
      depth++
    }
  }

  return pairs.length
}
