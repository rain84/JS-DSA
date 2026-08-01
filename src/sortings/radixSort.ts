/**
    Radix Sort:
    
    Time Complexity : Best & Worst & Average => O(n * k)
    Space Complexity: O(n + k) 
    Stability       : ??
    Is-In-Place     : ?? (probably no)
    When to use     : ??
    Remark          : ??
*/
// FIXME sorting is broken on the negative values
import { getDigit, getLength } from '../utils/math'

export const radixSort = (arr: number[]) => {
	const buckets = []
	let iterations = Math.max(...arr.map(getLength))
	let position = 1

	while (iterations--) {
		for (let i = 0; i < 10; i++) buckets[i] = <number[]>[]
		for (const num of arr) {
			buckets[getDigit(num, position)].push(num)
		}

		arr = buckets.flat()
		position++
	}

	return arr
}
