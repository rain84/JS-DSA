/**
    https://leetcode.com/discuss/general-discussion/754949/sorting-algorithms-in-short

    Quick Sort:

    Time Complexity : Best => O(nLog(n)) , Worst => O(n*n) 
    Space Complexity: O(n) 
    Stability       : Not-Stable 
    Is-In-Place     : In-Place
    Tag             : Divide & Conquer
    When to use     : 1.It is preferred over merge sort for extremely large array
                    2.When you don't care about worst case complexity
*/
export const qsort = (arr: number[], left = 0, right = arr.length - 1) => {
	if (left >= right) return

	let pivotIndex = left
	const pivot = arr[pivotIndex]

	for (let i = left + 1; i <= right; i++) {
		if (arr[i] < pivot) {
			swap(arr, ++pivotIndex, i)
		}
	}

	swap(arr, pivotIndex, left)
	qsort(arr, left, pivotIndex - 1)
	qsort(arr, pivotIndex + 1, right)
}

export const quickSort = (arr: number[], p = { left: 0, right: arr.length - 1 }) => {
	let pivot = p.left
	const pivotOnStart = p.left
	const pivotValue = arr[pivotOnStart]

	while (++p.left <= p.right) {
		if (arr[p.left] < pivotValue) {
			pivot++
			;[arr[pivot], arr[p.left]] = [arr[p.left], arr[pivot]]
		}
	}
	;[arr[pivotOnStart], arr[pivot]] = [arr[pivot], arr[pivotOnStart]]

	if (1 < pivot - pivotOnStart) quickSort(arr, { left: pivotOnStart, right: pivot - 1 })
	if (1 < p.right - pivot) quickSort(arr, { left: pivot + 1, right: p.right })

	return arr
}

const swap = (arr: number[], i: number, j: number) => ([arr[i], arr[j]] = [arr[j], arr[i]])

export const qsort2 = (arr: number[], left = 0, right = arr.length - 1) => {
	if (left >= right) return

	let l = left
	let r = right
	const target = arr[l]
	let pivot = l++

	while (pivot < r) {
		if (target > arr[l]) {
			swap(arr, pivot, l)
			pivot = l++
		} else {
			swap(arr, r--, l)
		}
	}

	qsort2(arr, left, pivot - 1)
	qsort2(arr, pivot + 1, right)
}

//  have impact with O(n) on space complexity,
//  because it uses left- and right- arrays
export const quickSort2 = (arr: number[]): number[] => {
	if (arr.length <= 1) return arr

	const left = []
	const right = []
	const pivot = arr[0]

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= pivot) left.push(arr[i])
		else right.push(arr[i])
	}

	return [...quickSort2(left), pivot, ...quickSort2(right)]
}
