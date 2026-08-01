// Вопрос от Airbnb
//
// Given an array of integers, return the largest range,
// inclusive, of integers that are all included in the array.
//
// For example, given the array [9, 6, 1, 3, 8, 10, 12, 11],
// return (8, 12) since 8, 9, 10, 11, and 12 are all in the array.

interface MinMax {
	min: number
	max: number
}

interface Info {
	index: number
	length: number
}

type AddToSet = (collection: { [key: number]: Set<number> }, idx: number, val: number) => void
type MaxSubArray = (arr: number[]) => MinMax[] | undefined

const make = {
	info: (index: number, length: number): Info => ({ index, length }),
	minmax: (min: number, max = min): MinMax => ({ min, max }),
}

export const addToSet: AddToSet = (collection, idx, val) => {
	;(collection[idx] || (collection[idx] = new Set<number>())).add(val)
}

//  Time complexity: O(n)
export const maxSubArray: MaxSubArray = (arr) => {
	if (arr.length === 0) return

	const min = new Map<number, Info>()
	const max = new Map<number, Info>()
	const arrs: MinMax[] = []
	const lengths: { [key: number]: Set<number> } = {}
	const passed = new Map<number, boolean>()
	let maxLength = Number.NEGATIVE_INFINITY

	for (const item of arr) {
		if (passed.has(item)) continue
		passed.set(item, true)

		const next = item + 1
		const prev = item - 1

		// index of min-max from arrs[]
		// 'next' for 'item' is 'min' in next sub-array
		// 'prev' for 'item' is 'max' in prev sub-array
		const minNext = min.get(next)
		const maxPrev = max.get(prev)

		// 'item' is 1st element of the new sub-array
		if (!minNext && !maxPrev) {
			const index = arrs.length
			const info = make.info(index, 1)
			const minmax = make.minmax(item)

			min.set(item, info)
			max.set(item, info)

			arrs.push(minmax)
			addToSet(lengths, 1, index)

			if (maxLength < 1) maxLength = 1
		}

		// 'item' is 'min' in sub-array
		// replace 'min' from sub-a with 'item'
		else if (minNext && !maxPrev) {
			const { index } = minNext

			minNext.length++
			min.set(item, minNext)
			min.delete(next)

			arrs[index].min = item
			addToSet(lengths, minNext.length, index)

			if (maxLength < minNext.length) maxLength = minNext.length
		}

		// 'item' is 'max' in sub-array
		else if (!minNext && maxPrev) {
			const { index } = maxPrev

			maxPrev.length++
			max.set(item, maxPrev)
			max.delete(prev)

			arrs[index].max = item
			addToSet(lengths, maxPrev.length, index)

			if (maxLength < maxPrev.length) maxLength = maxPrev.length
		}

		// the most interesting case
		// 'item' is located between 2 sub-arrays, and we should unite them into the single sub-array
		// also we should update indexes
		else if (minNext && maxPrev) {
			const length = minNext.length + maxPrev.length + 1
			const minmax = make.minmax(arrs[maxPrev.index].min, arrs[minNext.index].max)
			const info = make.info(arrs.length, length)

			min.set(minmax.min, info)
			max.set(minmax.max, info)
			arrs.push(minmax)

			addToSet(lengths, length, arrs.length - 1)

			if (maxLength < length) maxLength = length
		}
	}

	const res: MinMax[] = []
	for (const index of lengths[maxLength]) {
		res.push(arrs[index])
	}

	return res
}
