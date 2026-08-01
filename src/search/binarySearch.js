// TODO: not working on search edge elements

// by recursion
const binarySearch = (arr, val, indexOffset = 0) => {
	const middleIndex = ~~(arr.length / 2)

	if (middleIndex === 0 && arr[middleIndex] !== val) return -1
	if (val < arr[middleIndex]) return binarySearch(arr.slice(0, middleIndex), val, indexOffset)
	if (arr[middleIndex] < val)
		return binarySearch(arr.slice(middleIndex), val, middleIndex + indexOffset)
	if (arr[middleIndex] === val) return middleIndex + indexOffset
}

// by while -loop
const binarySearch2 = (arr, val) => {
	let halfLength = arr.length - 1
	let index = halfLength

	while (halfLength !== 0) {
		halfLength -= ~~(halfLength / 2)

		if (val < arr[index]) {
			index -= halfLength
		} else if (arr[index] < val) {
			index += halfLength
		} else return index
	}

	return -1
}

//  get middle index throw the min-max sum
const binarySearch3 = (arr, val) => {
	const idx = {
		left: 0,
		right: arr.length - 1,
	}

	while (idx.left < idx.right) {
		const idxMiddle = ~~((idx.left + idx.right) / 2)
		const valMiddle = arr[idxMiddle]

		if (valMiddle === val) return idxMiddle
		if (valMiddle < val) idx.left = idxMiddle
		else idx.right = idxMiddle
	}

	return -1
}

const data = [-13213, -124, -31, -17, -4, 0, 28, 46, 320, 327, 507, 539, 560, 568, 752, 807]

for (const val of data) {
	const i1 = binarySearch(data, val)
	const i2 = binarySearch2(data, val)
	const i3 = binarySearch3(data, val)

	console.log(`Index (${val}): recursive BS ${i1}, while-BS ${i2}, BS-3 ${i3}`)
}
