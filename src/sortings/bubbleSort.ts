/**
    https://leetcode.com/discuss/general-discussion/754949/sorting-algorithms-in-short

    Bubble Sort:

    Time Complexity: Best => O(n), Worst & Average => O(n * n)
    Space Complexity: O(1) 
    Stability       : Stable
    Is-In-Place     : In-Place	
    When to use     : 1. If array is of small size 
                    2. If array is of large size but nearly sorted
    Remark          : Easiest to implement	
*/
export const bubbleSort = (arr: number[]) => {
	for (let j = arr.length - 1, isSorted = true; j > 0; j--, isSorted = true) {
		for (let i = 0; i < j; i++) {
			if (arr[i] > arr[i + 1]) {
				;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
				isSorted = false
			}
		}
		if (isSorted) break
	}
	return arr
}

export const bubbleSort2 = (arr: number[], order = false) => {
	let i = arr.length

	while (--i) {
		let j = -1

		while (++j < i) {
			const shouldSwap = (order && arr[j] < arr[j + 1]) || (!order && arr[j] > arr[j + 1])

			if (shouldSwap) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}

	return arr
}
