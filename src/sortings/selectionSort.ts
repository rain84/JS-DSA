/**
    https://leetcode.com/discuss/general-discussion/754949/sorting-algorithms-in-short

    Selection Sort:
    
    Time Complexity : Best & Worst & Average => O(n*n)
    Space Complexity: O(1) 
    Stability       : Not-Stable
    Is-In-Place     : In-Place
    When to use     : 1. If array is of small size
                        2. To minimize the number of swaps
    Remarks         : Bubble sort has more number of swaps as compare to selection
                        Sort but bubble sort has better best time complexity.
                        It can also be implemented as stabile.
                        Selection sort makes O(n) swaps which is minimum among all sorting algorithms mentioned above.	
 */

export const selectionSort = (arr: number[]) => {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j
		}

		if (min !== i) {
			;[arr[i], arr[min]] = [arr[min], arr[i]]
		}
	}

	return arr
}

export const selectionSortOld = (arr: number[], order = false) => {
	let i = 0

	do {
		const min = {
			val: arr[i],
			index: i,
		}
		let j = ++i

		do {
			if (arr[j] < min.val) {
				min.val = arr[j]
				min.index = j
			}
		} while (++j < arr.length)
		;[arr[i], arr[min.index]] = [arr[min.index], arr[i]]
	} while (++i < arr.length - 1)

	return arr
}
