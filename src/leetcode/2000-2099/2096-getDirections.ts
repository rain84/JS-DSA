import { type TreeNode } from '../utils/tree'
/**
 * 2096. Step-By-Step Directions From a Binary Tree Node to Another
 * {@link https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/ | Link}
 *
 * "Lowest Common Ancestor" + DFS (optimized),
 */
export function getDirections(root: TreeNode | null, start: number, dest: number): string {
  const startPath: string[] = []
  const destPath: string[] = []
  dfs(root, start, startPath)
  dfs(root, dest, destPath)

  let i = 0
  while (startPath[i] === destPath[i]) i++

  return (
    Array(startPath.length - i)
      .fill('U')
      .join('') + destPath.slice(i).join('')
  )
}

/** "Lowest Common Ancestor" + DFS,
 *  about 2 times slower then the solution written above
 */
export function getDirections2(root: TreeNode | null, start: number, dest: number): string {
  const lca = (node: TreeNode | null, l: number, r: number): TreeNode | null => {
    if (!node || [l, r].includes(node.val)) return node

    const left = lca(node.left, l, r)
    const right = lca(node.right, l, r)

    return left && right ? node : left ?? right
  }

  const ancestor = lca(root, start, dest)
  if (!ancestor) return ''
  const lPath: string[] = []
  const rPath: string[] = []
  dfs(ancestor, start, lPath)
  dfs(ancestor, dest, rPath)

  return 'U'.repeat(lPath.length) + rPath.join('')
}

const dfs = (node: TreeNode | null, x: number, path: string[] = []): boolean => {
  if (!node) return false
  if (node.val === x) return true

  path.push('L')
  if (dfs(node.left, x, path)) return true

  path[path.length - 1] = 'R'
  if (dfs(node.right, x, path)) return true
  path.pop()

  return false
}
