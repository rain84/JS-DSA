{
	const sumRange = (size) => (size === 1 ? size + sumRange(size - 1) : 1)

	console.log(sumRange(5))
	console.log(sumRange(10))
	console.log(sumRange(15))
}

{
	const collectOddValues = ([val, ...arr]) => [
		...(val % 2 ? [val] : []),
		...(arr.length ? collectOddValues(arr) : []),
	]

	console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
}
