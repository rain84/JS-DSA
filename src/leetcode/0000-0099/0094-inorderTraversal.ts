import { TreeNode } from '../utils/tree/tree-node'

/**
 * 94. Binary Tree Inorder Traversal
 * {@link https://leetcode.com/problems/binary-tree-inorder-traversal/ | Link}
 *
 * Topics: Stack | Tree | Depth-First Search | Binary Tree
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */
export function inorderTraversal(root: TreeNode | null): number[] {
	const res: number[] = []
	const dfs = (root: TreeNode | null): void => {
		if (root === null) return

		dfs(root.left)
		res.push(root.val)
		dfs(root.right)
	}

	dfs(root)

	return res
}

// iterative solution
export function inorderTraversal2(root: TreeNode | null): number[] {
	const res: number[] = []
	const stack: TreeNode[] = []
	let node = root

	while (stack.length || node) {
		while (node) {
			stack.push(node)
			node = node.left
		}
		node = stack.pop()!
		res.push(node.val)
		node = node.right
	}

	return res
}
