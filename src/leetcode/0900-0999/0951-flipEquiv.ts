import { TreeNode } from '../utils/tree'

/**
 * {@link https://leetcode.com/problems/flip-equivalent-binary-trees | 951. Flip Equivalent Binary Trees}
 *
 * Topics: Tree | Depth-First Search | Binary Tree
 */
export function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (root1 === root2) return true
  if (!root1 || !root2 || root1?.val !== root2?.val) return false

  const { left: l1, right: r1 } = root1!
  const { left: l2, right: r2 } = root2!

  return (flipEquiv(l1, l2) && flipEquiv(r1, r2)) || (flipEquiv(l1, r2) && flipEquiv(r1, l2))
}

export const flipEquiv2 = (a: TreeNode | null, b: TreeNode | null): boolean => {
  const f = (t: TreeNode | null): string => (t ? '' + t.val + [f(t.left), f(t.right)].sort() : '')
  return f(a) === f(b)
}

/** One-Liner */
export const flipEquiv3 = (
  root1: T,
  root2: T,
  l1: T = null,
  r1: T = null,
  l2: T = null,
  r2: T = null,
  f = flipEquiv2
): boolean =>
  root1 === root2 ||
  (!(!root1 || !root2 || root1?.val !== root2?.val) &&
    ((l1 = root1!.left),
    (r1 = root1!.right),
    (l2 = root2!.left),
    (r2 = root2!.right),
    (f(l1, l2) && f(r1, r2)) || (f(l1, r2) && f(r1, l2)))) ||
  false

type T = TreeNode | null

/** TODO: trying the same approach as in flipQquiv2, but with Math */
export const flipEquiv4 = (a: TreeNode | null, b: TreeNode | null): boolean => {
  const f = (t: TreeNode | null): string => {
    return t ? t.val + f(t.left) + f(t.right) : ''
  }
  return f(a) === f(b)
}
