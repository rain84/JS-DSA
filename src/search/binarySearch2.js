const binarySearch = (arr, val) => {
	const getMiddle = (left, right) => left + Math.ceil((right - left) / 2)

	for (
		let left = 0, right = arr.length - 1, middle = getMiddle(left, right);
		left <= right;
		middle = getMiddle(left, right)
	) {
		const middleVal = arr[middle]
		if (val < middleVal) right = middle - 1
		else if (middleVal < val) left = middle + 1
		else return middle
	}

	return -1
}

const data = [2, 5, 6, 9, 13, 15, 28, 30]

for (const val of data) {
	console.log(`binarySearch(data, ${val}) === ${binarySearch(data, val)}`)
}
