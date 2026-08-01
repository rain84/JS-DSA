// https://practice.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1
//
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

export const rotateArr = (arr, d, n) => {
	const result = []
	const d2 = arr.length - d

	for (let i = 0; i < arr.length; i++) {
		const idx = i < d ? d2 + i : i - d
		result[idx] = arr[i]
	}

	return result
}

const res = rotateArr([1, 2, 3, 4, 5], 2, 5)
res
