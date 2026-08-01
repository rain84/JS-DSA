/**
 * {@link https://leetcode.com/problems/rabbits-in-forest | 781. Rabbits in Forest}
 *
 * Topics: Array | Hash Table | Math | Greedy
 */
export function numRabbits(answers: number[]): number {
	const cnt: Record<number, number> = {}
	let res = 0

	for (const x of answers) {
		if (cnt[x]) {
			cnt[x]--
		} else {
			cnt[x] = x
			res += x + 1
		}
	}

	return res
}
