/*
Условие задачи
Дан список целых неповторяющихся чисел и целое число.
Необходимо найти 1ую пару в списке, сумма которых равна заданному числу.
Перестановки (i, j) и (j, i) считаются одной и той же парой,
можно вывести любую из них.

Входные параметры
Массив целых чисел размера N.
Целое число.
*/

// findPairs([2, 4, 5, 3], 7) // [[2,5], [4,3]]

export const findPairs1 = (list: number[], target: number) => {
	const result = []
	const { length } = list

	let indexLeft = 0
	let indexRight = 1
	let sum: number

	while (indexLeft !== length - 1) {
		const l = list[indexLeft]
		const r = list[indexRight]

		sum = l + r

		if (sum === target) {
			result.push([l, r])
			indexLeft++
		}

		if (++indexRight === length) {
			indexLeft++
			indexRight = indexLeft + 1
		}
	}

	return result
}

export const findPairs2 = (list: number[], target: number) => {
	const result: [number, number][] = []
	const dict: { [K in number]: number } = {}

	for (const val of list) {
		dict[target - val] = val
	}

	for (const val of list) {
		if (dict[val]) {
			delete dict[dict[val]]
			result.push([val, dict[val]])
		}
	}

	return result
}

/**
 * THE BEST SOLUTION
 * Time complexity O(n)
 * Space complexity O(1)
 */
export const findPair3 = (list: number[], target: number) => {
	let l = 0
	let r = list.length - 1

	while (l < r) {
		const sum = list[l] + list[r]

		if (sum === target) return [list[l], list[r]]
		if (sum < target) l++
		else r--
	}

	return false
}

/**
 * Time complexity O(n)
 * Space complexity O(n)
 */
export const findPair4 = (arr: number[], target: number) => {
	const set = new Set<number>()

	for (const pair1 of arr) {
		const pair2 = target - pair1

		if (!set.has(pair2)) set.add(pair1)
		else return [pair1, pair2]
	}

	return false
}

/**
 * Time complexity O(log(n))
 * Space complexity O(1)
 */
export const findPair5 = (arr: number[], target: number) => {
	for (let i = 0; i < arr.length - 1; i++) {
		const pair1 = arr[i]
		const pair2 = target - pair1
		let iLeft = i + 1
		let iRight = arr.length - 1

		do {
			const iMiddle = Math.floor((iLeft + iRight) / 2)
			const item = arr[iMiddle]

			if (item === pair2) return [pair1, pair2]
			if (item < pair2) iLeft = iMiddle + 1
			else iRight = iMiddle - 1
		} while (iLeft <= iRight)
	}

	return false
}

export const findPairIndexes = (arr: number[], sum: number) => {
	const deltas = new Set<number>()
	const indexes = new Map<number, number>()

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i]

		if (deltas.has(item)) return [i, indexes.get(sum - item)]

		deltas.add(sum - item)
		indexes.set(item, i)
	}
}

export const haveSum = (arr: number[], sum: number) =>
	arr.some(
		(
			(set) => (n: number) =>
				set.has(n) || !set.add(sum - n)
		)(new Set()),
	)

export const findPair6 = (arr: number[], sum: number) => {
	const el = arr.find(
		(
			(set) => (n: number) =>
				set.has(n) || !set.add(sum - n)
		)(new Set()),
	)

	if (!el) return
	return [el, sum - el]
}
