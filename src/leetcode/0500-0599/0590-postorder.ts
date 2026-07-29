/**
 * {@link https://leetcode.com/problems/n-ary-tree-postorder-traversal/ | 590. N-ary Tree Postorder Traversal}
 *
 * Topics: Stack | Tree | Depth-First Search
 */
export function postorder(root: _Node | null): number[] {
  const res: number[] = []

  const dfs = (node: _Node | null) => {
    if (!node) return

    for (const x of node.children) {
      dfs(x)
    }

    res.push(node.val)
  }

  dfs(root)

  return res
}

export class _Node {
  val: number
  children: _Node[]
  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val
    this.children = children ?? []
  }
}

export const node = (val?: number, children?: _Node[]) => new _Node(val, children)
