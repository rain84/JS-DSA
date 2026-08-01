{
	const maxSubArray = (arr, num) => {
		let max = Number.NEGATIVE_INFINITY

		for (let i = 0; i < arr.length - num + 1; i++) {
			let tmp = 0

			for (let j = 0; j < num; j++) {
				tmp += arr[i + j]
			}

			if (tmp > max) {
				max = tmp
			}
		}

		return max
	}
}
