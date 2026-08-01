{
	const countUniqueValues = (arr) => {
		let uniq = 0
		let pointer1 = 0
		let pointer2 = 0

		while (pointer1++ !== arr.length) {
			if (arr[pointer1] === arr[pointer2]) continue

			uniq++
			pointer2 = pointer1
		}

		return uniq
	}

	function countUniqueValues2(arr) {
		if (arr.lenght === 0) return 0
		let i = 0
		let prevVal = arr[i]

		for (let j = 0; j < arr.length; j++) {
			if (prevVal !== arr[j]) {
				i++
				prevVal = arr[j]
			}
		}

		return i + 1
	}

	const data = [-3, -1, -1, -1, 0, 0, 0, 0, 1, 3, 5, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9]
	console.log(
		`
    countUniqueValues: ${countUniqueValues(data)}
    countUniqueValues2: ${countUniqueValues2(data)}
`.trim(),
	) // 9
}
