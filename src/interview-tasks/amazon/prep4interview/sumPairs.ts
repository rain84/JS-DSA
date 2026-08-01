type Output = [number, number][]

// time complexity: O(nlogn)
export const sumPairs = (arr: number[], target: number): Output => {
	const res: Output = []

	arr = [...arr].sort((a, b) => (a < b ? -1 : 1))

	let i = 0
	let j = arr.length - 1

	do {
		const sum = arr[i] + arr[j]

		if (sum === target) res.push([arr[i++], arr[j]])
		else if (sum < target) i++
		else j--
	} while (i < j)

	return res
}

// time complexity: O(n)
const sumPairs2 = (arr: number[], target: number): Output =>
	((pairs, pair?: number) =>
		arr.reduce<Output>(
			(res, item) => (
				(pair = target - item),
				pairs.has(pair) ? res.push([pair, item]) : pairs.set(item, pair),
				res
			),
			[],
		))(new Map<number, number>())

const input = [1, 4, 6, 2, 3, 9, -1, 65, 8]
const output = [6, 2]
const sum = 8

console.log('sumPairs2(input)', sumPairs2(input, sum))
