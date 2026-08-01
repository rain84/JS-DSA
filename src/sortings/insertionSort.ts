/**
    https://leetcode.com/discuss/general-discussion/754949/sorting-algorithms-in-short
    
    Insertion Sort:
    
    Time Complexity : Best => O(n) , Worst & Average => O(n*n)
    Space Complexity: O(1) 
    Stablitiy       : Stable
    Is-In-Place     : In-Place
    When to use     : 1. If array is of small size and nearly sorted
    Remark          : Standard Libraray of C uses this algo when n becomes smaller
                        than a threshold and for small size it is better than merge
                        and quick sort becasue of low constant values and non
                        recusive in nature.
*/

export const insertionSort = (arr: number[]) => {
	for (let i = 1; i < arr.length; i++) {
		const element = arr[i]

		let j = i - 1
		for (; j >= 0 && arr[j] > element; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = element
	}

	return arr
}
