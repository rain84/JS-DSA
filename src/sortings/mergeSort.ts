/**
    https://leetcode.com/discuss/general-discussion/754949/sorting-algorithms-in-short

    Merge Sort:

    Time Complexity : Best & Worst & Average => O(nLog(n))
    Space Complexity: O(n)
    Stability       : Stable
    Is-In-Place     : Not-In-Place
    Tag             : Divide & Conquer
    When to use     : 1.When we don't have random access(linked list)
                        [R.A like as we have in array]
                        2.When array is not to large.
*/

export const mergeSort = (arr: number[]): number[] => {
	if (arr.length <= 1) return arr

	const pivot = arr.length >> 1
	const left = mergeSort(arr.slice(0, pivot))
	const right = mergeSort(arr.slice(pivot))
	const [m, n] = [left.length, right.length]
	let [i, j] = [0, 0]
	const res: number[] = []

	while (i < m && j < n) {
		res.push(left[i] < right[j] ? left[i++] : right[j++])
	}

	const rest = i < m ? left.slice(i) : right.slice(j)
	res.push(...rest)

	return res
}
