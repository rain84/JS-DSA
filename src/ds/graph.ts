type AdjacencyList = {
	[K: string]: string[]
}

type VertexContainer = {
	current: string
	prev?: string
}

export type Cb = (vertex: string, edge?: string) => void

export class Graph {
	#adjacency: AdjacencyList

	constructor() {
		this.#adjacency = {}
	}

	addVertex(name: string) {
		if (!this.#adjacency[name]) this.#adjacency[name] = []
		return this
	}

	addEdge(v1: string, v2: string) {
		if (!this.#adjacency[v1]) this.addVertex(v1)
		if (!this.#adjacency[v2]) this.addVertex(v2)

		this.#adjacency[v1].push(v2)
		this.#adjacency[v2].push(v1)

		return this
	}

	removeEdge(v1: string, v2: string) {
		if (!this.#adjacency[v1] || !this.#adjacency[v2]) return

		this.#adjacency[v1] = this.#adjacency[v1].filter((v) => v !== v2)
		this.#adjacency[v2] = this.#adjacency[v2].filter((v) => v !== v1)

		return this
	}

	removeVertex(v: string) {
		if (!this.#adjacency[v]) return

		for (const v2 of this.#adjacency[v]) {
			this.removeEdge(v, v2)
		}

		return this
	}

	dfsRecursive(current: string, cb: Cb) {
		const visited = new Set<string>()

		const walk = (vertex: VertexContainer) => {
			const edge = this.getEdge(vertex.current, vertex.prev)
			cb(vertex.current, edge)

			vertex.prev = vertex.current
			visited.add(vertex.current)

			for (const current of this.#getNeighboursFor(vertex.current) ?? []) {
				if (visited.has(current)) continue
				walk({ current, prev: vertex.prev })
			}
		}
		walk({ current })
	}

	bfsRecursive(current: string, cb: Cb) {
		const visited = new Set<string>()
		const vs: VertexContainer[] = [{ current }]

		const walk = () => {
			for (const vertex of vs) {
				if (visited.has(vertex.current)) continue

				const edge = this.getEdge(vertex.current, vertex.prev)
				cb(vertex.current, edge)

				visited.add(vertex.current)
				vs.push(
					...(this.#getNeighboursFor(vertex.current).map((current) => ({
						current,
						prev: vertex.current,
					})) ?? []),
				)
				walk()
			}
		}
		walk()
	}

	// dfsIterative(current: string, cb: Cb) {
	//   const visited = new Set<string>()
	//   let vertex: VertexContainer | undefined

	//   let vs: VertexContainer[] = [{ current }]

	//   while ((vertex = vs.pop())) {
	//     const edge = this.getEdge(vertex.current, vertex.prev)
	//     cb(vertex.current, edge)
	//     vertex.prev = vertex.current
	//     visited.add(vertex.current)
	//     vs.push(...this.#getNeighboursFor(vertex.current))
	//     vs = vs.filter((v) => !visited.has(v))
	//   }
	// }

	bfsIterative(initialVertex: string, cb: Cb) {
		const visited = new Set<string>()
		let vs: string[] = [initialVertex]
		let vertex: string | undefined

		while ((vertex = vs.shift())) {
			cb(vertex)
			visited.add(vertex)
			vs.push(...this.#getNeighboursFor(vertex))
			vs = vs.filter((v) => !visited.has(v))
		}
	}

	#getNeighboursFor(vertex: string) {
		return this.#adjacency[vertex]
	}

	protected getEdge(v1: string, v2?: string): string | undefined {
		if (v2 !== undefined) return [v1, v2].sort().join('-')
	}
}
