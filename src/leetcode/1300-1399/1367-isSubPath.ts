import { ListNode } from '../utils/linked-list'
import { TreeNode } from '../utils/tree'

/**
 * {@link https://leetcode.com/problems/linked-list-in-binary-tree/ | 1367. Linked List in Binary Tree}
 *
 * Topics: Linked List | Tree | Depth-First Search | Binary Tree
 */
export function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (!root) return false

  const dfs = (head: ListNode | null, node: TreeNode | null): boolean => {
    if (!head) return true
    if (!node || head.val !== node.val) return false
    return dfs(head.next!, node.left) || dfs(head.next!, node.right)
  }

  return dfs(head, root) || isSubPath(head, root?.left!) || isSubPath(head, root?.right!)
}
