interface Interval {
	min: [number, number]
	max: [number, number]
}

export const getMinCoveredInterval = ([head, ...arr]: [number, number][]) => {
	let left = { min: head[0], max: head[1] }
	let right = { min: head[0], max: head[1] }

	for (const [min, max] of arr) {
		const range = { min, max }

		if (range.min >= left.max && range.max <= right.min) continue

		if (range.max < left.min) left = range
		else if (range.min > right.max) right = range
		else if (range.max > left.min && range.max < left.max) left.max = range.max
		else if (range.min < right.max && range.min > right.min) right.min = range.min
	}

	return [left.max, right.min]
}

const res = getMinCoveredInterval([
	[2, 6],
	[0, 3],
	[3, 4],
	[6, 9],
])
console.log(res)
