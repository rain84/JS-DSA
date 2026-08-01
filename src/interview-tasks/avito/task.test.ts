import {
	findPairs1,
	findPairs2,
	findPair3,
	findPair4,
	findPair5,
	findPair6,
	findPairIndexes,
	haveSum,
} from './task'

it('findPairs1', () => {
	expect(findPairs1([2, 4, 5, 3], 7)).toMatchObject([
		[2, 5],
		[4, 3],
	])
	expect(findPairs1([2, 4, 5, 3], 0)).toMatchObject([])
})

it('findPairs2', () => {
	expect(findPairs2([2, 4, 5, 3], 7)).toMatchObject([
		[2, 5],
		[4, 3],
	])
	expect(findPairs2([2, 4, 5, 3], 0)).toMatchObject([])
})

it('findPair3', () => {
	const data = [-1, 0, 1, 3, 4]
	let target = 5
	let result = findPair3(data, target)
	;(result as [number, number]).sort()
	expect(result).toMatchObject([1, 4])

	target = 9
	result = findPair3(data, target)
	expect(result).toBeFalsy()
})

it('findPair4', () => {
	const data = [-1, 0, 1, 3, 4]
	let target = 5
	let result = findPair4(data, target)
	;(result as [number, number]).sort()
	expect(result).toMatchObject([1, 4])

	target = 9
	result = findPair4(data, target)
	expect(result).toBeFalsy()
})

it('findPair5', () => {
	const data = [-1, 0, 1, 3, 4]
	let target = 5
	let result = findPair5(data, target)
	;(result as [number, number]).sort()
	expect(result).toMatchObject([1, 4])

	target = 9
	result = findPair5(data, target)
	expect(result).toBeFalsy()
})

it('findPair6', () => {
	const data = [-1, 0, 1, 3, 4]
	let target = 5
	let result = findPair6(data, target)
	;(result as [number, number]).sort()
	expect(result).toMatchObject([1, 4])

	target = 9
	result = findPair6(data, target)
	expect(result).toBeFalsy()
})

it('findPairIndexes', () => {
	const data = [-1, 0, 1, 3, 4]
	expect(findPairIndexes(data, 2)!.sort()).toMatchObject([0, 3].sort())
	expect(findPairIndexes(data, 12)).toBeUndefined()
})

it('haveSum', () => {
	const data = [-1, 0, 1, 3, 4]
	expect(haveSum(data, 2)).toBeTruthy()
	expect(haveSum(data, 8)).toBeFalsy()
})
