const binarySearch = (arr, val) => {
	const pointer = {
		left: 0,
		right: arr.length - 1,
	}

	if (arr[pointer.left] === val) return pointer.left
	if (arr[pointer.right] === val) return pointer.right

	while (pointer.left <= pointer.right) {
		const pointerMiddle = ~~((pointer.right + pointer.left) / 2)
		const valueMiddle = arr[pointerMiddle]

		if (valueMiddle === val) return pointerMiddle
		if (valueMiddle < val) pointer.left = pointerMiddle + 1
		else pointer.right = pointerMiddle - 1
	}

	return -1
}

const data = [-13213, -124, -31, -17, -4, 0, 28, 46, 320, 327, 507, 539, 560, 568, 752, 807]

for (const val of data) {
	console.log(`binarySearch(${val}) === ${binarySearch(data, val)}`)
}
