{
	const getSumZeroPair = (arr) => {
		let indexLeft = 0
		let indexRight = arr.length - 1

		while (indexLeft < indexRight) {
			const left = arr[indexLeft]
			const right = arr[indexRight]
			const sum = left + right

			// console.log(`${left}, ${right}`);

			if (sum === 0) return [left, right]
			if (sum < 0) indexLeft++
			else indexRight--
		}
	}

	const data = [-100, -75, -4, -2, -1, 1, 3, 7, 10, 10000] // sorted array
	const res = getSumZeroPair(data)
	console.log(res)
}
