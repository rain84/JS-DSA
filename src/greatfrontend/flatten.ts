/**
 * GreatFrontEnd — Flatten
 * {@link https://www.greatfrontend.com/questions/javascript/flatten | Link}
 *
 * Implement flatten(value) that flattens a nested array.
 * - Flattens deeply by default (depth = Infinity)
 * - Optionally accepts depth parameter
 */
export function flatten<T>(value: ArrayValue<T>[], depth: number = Infinity): T[] {
	const res: T[] = []

	for (const x of value) {
		if (Array.isArray(x) && depth > 0) {
			res.push(...flatten(x, depth - 1))
		} else {
			res.push(x as T)
		}
	}

	return res
}

type ArrayValue<T> = T | Array<ArrayValue<T>>
