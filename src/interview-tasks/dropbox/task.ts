export const numberToColumn = (val: number) => {
	const charcodeA = 'A'.charCodeAt(0)
	const alphabetSize = 26
	let res = ''
	let shouldDecrease = false

	do {
		let i = val % alphabetSize

		if (i === 0) {
			i = alphabetSize
			shouldDecrease = true
		} else if (shouldDecrease) {
			shouldDecrease = false
			i--
		}

		if (i) {
			res = String.fromCharCode(i - 1 + charcodeA) + res
		}

		val = Math.floor(val / alphabetSize)
	} while (val > 0)

	return res
}

for (let i = 1; i < 100; i++) {
	console.log(i, ' - ', numberToColumn(i))
}
