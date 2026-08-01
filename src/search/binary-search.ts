/** Find index of 'target' */
export const binarySearch = (sortedArr: number[], num: number) => {
	let [l, r] = [0, sortedArr.length - 1]

	while (l <= r) {
		const i = (l + r) >> 1

		if (sortedArr[i] === num) return i
		if (l === r) return -1

		if (sortedArr[i] < num) l = i + 1
		else r = i
	}
}

/** Find the index to insert 'target' to preserve sorting order */
export const bsInsert = (arr: number[], target: number) => {
	let [l, r] = [0, arr.length - 1]

	while (l <= r) {
		const i = (l + r) >> 1
		if (arr[i] <= target) l = i + 1
		else r = i - 1
	}

	return l
}

/** Find leftmost index of duplicated 'target' */
export const bsLeftDuplicated = (arr: number[], target: number) => {
	let [l, r] = [0, arr.length - 1]

	while (l < r) {
		const i = (l + r) >> 1
		if (arr[i] < target) l = i + 1
		else r = i
	}

	return l
}
