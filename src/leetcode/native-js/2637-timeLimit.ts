/**
 * 2637. Promise Time Limit
 * {@link https://leetcode.com/problems/promise-time-limit/ | Link}
 */
export const timeLimit =
	(fn: Fn, t: number): Fn =>
	async (...args) =>
		new Promise((resolve, reject) => {
			setTimeout(() => reject('Time Limit Exceeded'), t)
			fn(...args)
				.then(resolve)
				.catch(reject)
		})

/** My 1st (monstruous) solution :) */
const timeLimit2 =
	(fn: Fn, t: number): Fn =>
	async (...args) => {
		try {
			const promises = [
				new Promise((resolve, reject) => {
					;(async () => {
						try {
							resolve(await fn(...args))
						} catch (error) {
							reject(error)
						}
					})()
				}),
				new Promise((_, reject) => setTimeout(reject, t)),
			]
			return await Promise.race(promises)
		} catch (e) {
			return Promise.reject(e ?? 'Time Limit Exceeded')
		}
	}
