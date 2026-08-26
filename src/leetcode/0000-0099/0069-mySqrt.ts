/**
 * 67. Add Binary
 * {@link https://leetcode.com/problems/add-binary/ | Link}
 *
 * Topics: String | Bit Manipulation | Simulation
 */
export function mySqrt(x: number): number {
	if (x < 2) return x
	let [l, r] = [1, x]

	while (l <= r) {
		const mid = l + ((r - l) >> 1)
		const square = mid * mid

		if (x === square) return mid
		else if (x < square) r = mid - 1
		else l = mid + 1
	}

	return r
}
