/**
 * 2721. Execute Asynchronous Functions in Parallel
 * {@link https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/ | Link}
 */

export function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
	return new Promise((resolve, reject) => {
		const { length } = functions
		const res: T[] = Array(length)
		let c = length

		for (let i = 0; i < length; i++) {
			functions[i]().then((x) => {
				res[i] = x
				if (!--c) resolve(res)
			}, reject)
		}
	})
}

type Fn<T> = () => Promise<T>

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
