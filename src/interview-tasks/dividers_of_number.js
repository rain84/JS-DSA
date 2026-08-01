{
	// all divisors of number
	const getDividers = (number) => {
		const result = [1, number]
		let bounce = Math.ceil(Math.sqrt(number))
		let divider = 2
		let partition

		do {
			if (number % divider !== 0) continue

			partition = number / divider
			result.push(divider, partition)
			bounce = partition
		} while (++divider < bounce)

		return result.sort((a, b) => a - b)
	}

	const isPerfect = (number) =>
		getDividers(number)
			.slice(0, -1)
			.reduce((acc, val) => acc + val) === number

	console.log('6', isPerfect(6))
}
