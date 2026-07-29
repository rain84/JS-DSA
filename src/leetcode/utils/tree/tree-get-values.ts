import type { TreeNode } from './tree-node'

type TraverseOrder = 'preorder' | 'inorder' | 'postorder'

export const getTreeValues = (root: TreeNode | null, traverseOrder: TraverseOrder): number[] => {
  if (!root) return []

  const res: number[] = []
  const dfs = (node: TreeNode | null) => {
    if (!node) return null

    if (traverseOrder === 'preorder') res.push(node.val)
    dfs(node.left)
    if (traverseOrder === 'inorder') res.push(node.val)
    dfs(node.right)
    if (traverseOrder === 'postorder') res.push(node.val)
  }

  dfs(root)

  return res
}

getTreeValues.preorder = (root: TreeNode | null) => getTreeValues(root, 'preorder')
getTreeValues.inorder = (root: TreeNode | null) => getTreeValues(root, 'inorder')
getTreeValues.postorder = (root: TreeNode | null) => getTreeValues(root, 'postorder')
getTreeValues.bfs = (root: TreeNode | null) => {
  const res: number[] = []
  let q = [root]

  while (q.length) {
    const nextQ: (TreeNode | null)[] = []
    for (const node of q) {
      if (!node) continue

      res.push(node.val)
      nextQ.push(node.left)
      nextQ.push(node.right)
    }

    q = nextQ
  }

  return res
}
