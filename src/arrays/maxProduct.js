/**
 * Implement function maxProduct
 * should return maximum possible product from the consecutive characters of the array
 */
const maxProduct = (nums) => {
	const getCountOfNegatives = (arr) => arr.filter((el) => el < 0).length
	const multiply = (arr) => (arr.length ? arr.reduce((acc, val) => acc * val) : -Number.Infinity)

	const groups = nums
		.reduce(
			(acc, val) => {
				const lastContainer = acc[acc.length - 1]

				if (val) {
					lastContainer.push(val)
				} else if (lastContainer.length) acc.push([])

				return acc
			},
			[[]],
		)

		.flatMap((group) => {
			const isEven = getCountOfNegatives(group) % 2 === 0

			if (isEven) return [group]

			const maxNegative = group.reduce(
				(acc, val, key) => {
					if (val < 0 && val > acc.val && key % 2 === 0) {
						acc.val = val
						acc.key = key
					}
					return acc
				},
				{ val: -Number.Infinity, key: -1 },
			)

			console.log('maxNegative', maxNegative)

			const groupPairsWithoutMaxNegative = [
				group.slice(0, maxNegative.key),
				group.slice(maxNegative.key + 1),
			]
			return groupPairsWithoutMaxNegative
		})
		.map(multiply)

	return Math.max(...groups)
}

console.log(maxProduct([4, 0, 6, 9]))
console.log(maxProduct([4, 1, -2, -5, 1, 3]))
console.log(maxProduct([-5, -2, -3, -4, -1, -6, -7, 0, 0, 0, 1, 2]))
console.log(maxProduct([1, 2, 3, 4, 5]))
