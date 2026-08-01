/**
 * 2721. Execute Asynchronous Functions in Parallel
 * {@link https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/ | Link}
 */
export const promiseAll = <T>(arr: Fn<T>[]): Promise<T[]> =>
	new Promise((resolve, reject) => {
		const res: T[] = Array(arr.length)
		let counter = res.length

		for (let i = 0; i < arr.length; i++) {
			const p = arr[i]()
			const onResolve = (x: T): void => {
				res[i] = x

				if (!--counter) resolve(res)
			}

			p.then(onResolve, reject)
		}
	})

type Fn<T> = () => Promise<T>
