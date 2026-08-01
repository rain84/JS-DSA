/*   
  Given a positive integer n,
  find the smallest number of squared integers which sum to n.

  For example, given n = 13, 
  return 2 since 13 = 3^2 + 2^2 = 9 + 4.

  Given n = 27, 
  return 3 since 27 = 3^2 + 3^2 + 3^2 = 9 + 9 + 9.

  https://www.geeksforgeeks.org/minimum-number-of-squares-whose-sum-equals-to-given-number-n/
 */

const justGetSquares = (n: number): number[] => {
	const root = { fractional: 0, integer: 0 }
	root.fractional = Math.sqrt(n)
	root.integer = Math.floor(root.fractional)

	const square = root.integer ** 2
	const haveRoots = root.fractional - root.integer > 0
	if (haveRoots) {
		n -= square
		return [square, ...justGetSquares(n)]
	}

	return [square]
}

const calcSum = (arr: number[]): number => arr.reduce((acc, val) => acc + val)

//  TODO: IMPROVE EXECUTION SPEED
//  [val, ...values] - like some numbers,
//  any arbitary sum-combinations of them
//  should be eqal to "sum"
//  "size" is used to reduce the number of genetated combinantions
const getCombinations = ([val, ...values]: number[], sum: number, size = +Infinity): number[][] => {
	if (val === undefined) return []

	const results: number[][] = []
	const result: number[] = []
	let nextResults: number[][]
	let resultSum = 0

	while (resultSum < sum) {
		result.push(val)
		if (result.length === size) return results

		resultSum = calcSum(result)
		if (resultSum === sum) nextResults = [result]
		else {
			const combinations = getCombinations(values, sum - resultSum, size)
			nextResults = combinations.map((rest) => {
				if (Array.isArray(rest)) return [...result, ...rest]
				else return result
			})
		}

		nextResults.forEach((result) => {
			results.push(result)
			if (result.length < size) size = result.length
		})
	}

	return [...results, ...getCombinations(values, sum, size)]
}

export const getSquares = (n: number): number[][] => {
	if (n === 1) return [[1]]
	if (n === 2) return [[1, 1]]
	if (n === 3) return [[1, 1, 1]]

	const fractionalRoot = Math.sqrt(n)
	let root = Math.floor(fractionalRoot)
	if (root === fractionalRoot) return [[root ** 2]]

	const size = n - root ** 2 + 1

	// populate array of squares
	const squares = []

	do squares.push(root ** 2)
	while (--root)

	return getCombinations(squares, n, size)
}

export const getN = (n: number): number => {
	return getSquares(n).reduce((l, { length }) => (length < l ? length : l), +Infinity)
}
