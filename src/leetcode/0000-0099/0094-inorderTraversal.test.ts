import { createTree, createTree2 } from '../utils/tree/tree-create'
import { inorderTraversal, inorderTraversal2 } from './0094-inorderTraversal'

it.each(
	// prettier-ignore
	[
		// Nested array format: [root, left, right] where left/right are nested arrays
		[createTree([1, [2, [3], [4]], [5, [6], [7]]]), [3, 2, 4, 1, 6, 5, 7]],
		[createTree([]), []],
		[createTree([1]), [1]],
		[createTree([1, [2], [null]]), [2, 1]],
		[createTree([1, [null], [2]]), [1, 2]],
		// Level-order array format (createTree2) - complete trees with proper null padding
		[createTree2([1, 2, 3, 4, 5, 6, 7]), [4, 2, 5, 1, 6, 3, 7]],
		[createTree2([236, 104, 701, null, 227, null, 911]), [104, 227, 236, 701, 911]],
		// LeetCode example [1,null,2,3] -> full padding: [1, null, 2, null, null, 3, null]
		[createTree2([1, null, 2, null, null, 3, null]), [1, 3, 2]],
	],
)('inorderTraversal(%p) = %p', (root, expected) => {
	// Both implementations must produce identical results for all test cases
	expect(inorderTraversal(root)).toEqual(expected)
	expect(inorderTraversal2(root)).toEqual(expected)
})
