// https://practice.geeksforgeeks.org/problems/minimum-distance-between-two-numbers/1

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

export const minDist = (a, n, x, y) => {
	let min
	let counter = 0
	const pairs = { [x]: y, [y]: x }
	let pair

	for (let i = 0; i <= a.length; i++) {
		const ch = a[i]

		if (pairs[ch] !== undefined) {
			const isPair = pair === pairs[ch]
			const isMin = min === undefined || counter < min

			if (isPair && isMin) {
				min = counter
			}

			counter = 0
			pair = ch
		}

		if (pair !== undefined) counter++
	}

	return min === undefined ? -1 : min
}

const res = minDist([1, 2, 3, 2], 4, 1, 2)
res
