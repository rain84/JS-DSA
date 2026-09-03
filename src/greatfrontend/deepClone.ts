/**
 * GreatFrontEnd — Deep Clone
 * {@link https://www.greatfrontend.com/questions/javascript/deep-clone | Link}
 */
export function deepClone<T>(value: T): T {
	const type = Object.prototype.toString.call(value)

	switch (type) {
		case '[object Array]': {
			const res: unknown[] = []

			for (const x of value as unknown[]) {
				res.push(deepClone(x))
			}

			return res as T
		}

		case '[object Object]': {
			return Object.fromEntries(
				Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, deepClone(v)]),
			) as T
		}

		default:
			return value
	}
}
