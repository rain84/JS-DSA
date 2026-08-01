/**
 * Binary Indexed Tree a.k.a. Fenwick Tree
 *
 * {@link https://ru.algorithmica.org/cs/range-queries/fenwick/ | Дерево Фенвика}
 * {@link https://tinyurl.com/27y28r5z | microsoft fast-binary-indexed-tree-js}
 * {@link https://tinyurl.com/22ahzhfl | Binary Indexed Trees (topcoder)}
 *
 */
export class BIT {
	#n: number
	#arr: number[]

	constructor(n: number) {
		this.#n = n
		this.#arr = Array(n + 1).fill(0)
	}

	query(r: number): number
	query(r: number, l?: number) {
		/**  invoke sum(r) */
		if (l === undefined) {
			let res = 0
			while (r > 0) {
				res += this.#arr[r]
				r -= r & -r
			}
			return res
		}
		/** invoke sum(r, l) */
		;[r, l] = [l, r]
		return this.query(l) - this.query(r - 1)
	}

	update(i: number, x: number) {
		while (i <= this.#n) {
			this.#arr[i] += x
			i += i & -i
		}
	}
}
