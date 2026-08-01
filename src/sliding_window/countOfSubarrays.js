{
	const subArraysCount = (arr, size) => {
		const pointers = {
			left: 0,
			right: 0,
		}
		let sum = 0
		let counter = 0

		const checkSum = () => sum === size && counter++

		do {
			if (pointers.right !== arr.length) {
				sum += arr[pointers.right++]
				checkSum()
			}

			if (sum > size) {
				sum -= arr[pointers.left++]
				checkSum()
			} else if (pointers.right === arr.length) return counter
		} while (pointers.left < pointers.right)

		return counter
	}

	const input = [1, 1, 1, 2]
	const k = 2

	const res = subArraysCount(input, k)
	console.log('subArraysCount', res)
}
