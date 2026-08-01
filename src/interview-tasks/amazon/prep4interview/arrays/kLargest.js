// https://practice.geeksforgeeks.org/problems/third-largest-element/0s
//
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
//
// TODO: improve with (2)
// https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/

export const kLargest = (a, k) => {
	if (a.length < k) return -1

	let j = 0

	while (j++ < k) {
		for (let i = 0; i < a.length - 1; i++) {
			if (a[i] > a[i + 1]) {
				;[a[i], a[i + 1]] = [a[i + 1], a[i]]
			}
		}
	}

	return a[a.length - k]
}

export const thirdLargest = (a, n) => kLargest(a, 3)
