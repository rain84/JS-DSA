/**
 * {@link https://leetcode.com/problems/promise-time-limit/ | 2637. Promise Time Limit}
 *
 * Topics: Native JS
 */
type Fn = (...params: any[]) => Promise<any>

export function timeLimit(fn: Fn, t: number): Fn {
	return (...args) => {
		const p1 = fn(...args)
		let id: ReturnType<typeof setTimeout>

		const p2 = new Promise((_, reject) => {
			id = setTimeout(() => {
				reject('Time Limit Exceeded')
			}, t)
		})

		return Promise.race([p1, p2]).finally(() => clearInterval(id))
	}
}
