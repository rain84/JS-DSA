export class Trie {
	#root: Trie_ = {}
	#TERMINAL_MARK = Symbol('TERMINAL_MARK')

	constructor(words: string[]) {
		for (const word of words) {
			this.add(word)
		}
	}

	get root() {
		return this.#root
	}

	add(s: string) {
		if (!s) return this

		let node: Trie_ = this.#root

		for (const ch of s) {
			node[ch] ??= {}
			node = node[ch] as Trie_
		}

		;(node as Trie2)![this.#TERMINAL_MARK] = null
	}

	has(s: string) {
		const node = this.#rewind(s)
		return node && this.#TERMINAL_MARK in node
	}

	delete(s: string): boolean {
		let node = this.#root
		let closestContainer = this.#root
		let key = s[0]

		for (const ch of s) {
			if (!node[ch]) return false

			if (this.#haveNeighbours(node)) {
				closestContainer = node
				key = ch
			}

			node = node[ch] as Trie_
		}

		if (!(this.#TERMINAL_MARK in node)) return false

		if (!this.#haveNeighbours(node)) {
			closestContainer[key] = null
			delete closestContainer[key]
		}

		return delete (node as Trie2)![this.#TERMINAL_MARK]
	}

	entries(prefix = ''): string[] {
		const node = this.#rewind(prefix)
		if (!node) return []

		return this.#entries(node, prefix)
	}

	#entries(trie: Trie_, s = '') {
		const res: string[] = []

		if (this.#TERMINAL_MARK in trie) res.push(s)

		for (const [ch, nextTrie] of Object.entries(trie)) {
			const entries = this.#entries(nextTrie as Trie_, s + ch)
			res.push(...entries)
		}

		return res
	}

	#rewind(s: string) {
		let node = this.#root

		for (const ch of s) {
			if (!node[ch]) return null
			node = node[ch] as Trie_
		}

		return node
	}

	#haveNeighbours(node: Trie_) {
		const n = Object.keys(node).length
		return n + Number(Boolean(this.#TERMINAL_MARK in node)) >= 2
	}
}

type Trie_ = { [key: string]: Trie2 }
type Trie2 = { [key: string | symbol]: Trie2 } | null
