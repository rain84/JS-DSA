type Items<T> = [string, T][]
type Collection = 'keys' | 'values' | 'entries'

export class HashTable<T> {
	#storage: Items<T>[]
	#MAX_LENGTH: number

	constructor(max_length = 51) {
		this.#MAX_LENGTH = max_length
		this.#storage = new Array(max_length)
	}

	get(key: string) {
		return this.#getItem(key)?.[1]
	}

	set(key: string, val: T) {
		const item = this.#getItem(key)

		if (item) item[1] = val
		else {
			const index = this.#hash(key)
			if (!this.#storage[index]) this.#storage[index] = [[key, val]]
			else this.#storage[index].push([key, val])
		}
	}

	delete(key: string) {
		const index = this.#hash(key)

		if (!this.#storage[index]) return
		if (this.#storage[index].length === 1) delete this.#storage[index]
		else this.#storage[index] = this.#storage[index].filter(([itemKey]) => itemKey !== key)
	}

	keys() {
		return this.#storage.flat().reduce<string[]>((acc, [k]) => (acc.push(k), acc), [])
	}

	values() {
		return this.#storage.flat().reduce<T[]>((acc, [_, v]) => (acc.push(v), acc), [])
	}

	entries() {
		return this.#storage.flat().reduce<Items<T>>((acc, [k, v]) => (acc.push([k, v]), acc), [])
	}

	#getItem(key: string) {
		const index = this.#hash(key)
		return this.#storage[index]?.find(([itemKey]) => itemKey === key)
	}

	#hash(s: string) {
		const WEIRD_NUMBER = 31
		let count = this.#MAX_LENGTH < s.length ? this.#MAX_LENGTH : s.length
		let result = 1

		while (count--) {
			result = result * WEIRD_NUMBER + s[count].charCodeAt(0)
		}
		result %= this.#MAX_LENGTH

		return result
	}
}
