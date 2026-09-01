/**
 * 1502. Can Make Arithmetic Progression From Sequence
 * {@link https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/ | Link}
 *
 * Topics: Array | Sorting
 *
 * A sequence of numbers is called an arithmetic progression if the difference
 * between any two consecutive elements is the same.
 * Given an array of numbers arr, return true if the array can be rearranged
 * to form an arithmetic progression. Otherwise, return false.
 */
export function canMakeArithmeticProgression(arr: number[]): boolean {
	const min = Math.min(...arr)
	const max = Math.max(...arr)

	if ((max - min) % (arr.length - 1) !== 0) return false

	const step = (max - min) / (arr.length - 1)
	const set = new Set(arr)

	if (step === 0 && set.size === 1) return true

	for (let i = min; i <= max; i += step) {
		if (!set.has(i)) {
			return false
		}
	}

	return true
}
