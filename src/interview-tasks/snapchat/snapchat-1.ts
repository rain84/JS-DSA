/*
Вопрос от Snapchat 

Given a list of possibly overlapping intervals,
return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.
For example, given (1, 3), (5, 8), (4, 10), (20, 25), you should return (1, 3), (4, 10), (20, 25).
*/

type Maybe<T> = T | null

type Interval = [number, number]
type Intervals = Interval[]
export const mergeOverlappingIntervals = ([first, ...rest]: Intervals): Intervals => {
	if (rest.length === 1) return rest

	const interval: Maybe<Interval> = rest.reduce((overlapper, current) => {
		const canOverlapFromLeft =
			overlapper[0] < current[0] && overlapper[1] > current[0] && overlapper[1] < current[1]
		const canOverlapFromRight =
			overlapper[1] > current[1] && overlapper[0] > current[0] && overlapper[0] < current[1]
		const isOverlapped = overlapper[0] > current[0] && overlapper[1] < current[1]

		if (canOverlapFromLeft) return [overlapper[0], current[1]]
		if (canOverlapFromRight) return [current[0], overlapper[1]]
		if (isOverlapped) return current

		return overlapper
	}, first)

	return interval
		? [interval, ...mergeOverlappingIntervals(rest)]
		: [...mergeOverlappingIntervals(rest)]
}

const input: Intervals = [
	[1, 3],
	[5, 8],
	[4, 10],
	[20, 25],
]
const output: Intervals = [
	[1, 3],
	[4, 10],
	[20, 25],
]

const result = mergeOverlappingIntervals(input)
console.log(JSON.stringify(result, null, ''))
