import { Graph } from './graph'

export class GraphWeighted extends Graph {
	#weights: Map<string, number>

	constructor() {
		super()
		this.#weights = new Map()
	}

	addEdge(v1: string, v2: string, weight?: number): this {
		if (!weight) return this

		const edgeName = super.getEdge(v1, v2)
		if (edgeName) this.#weights.set(edgeName, weight)
		return super.addEdge(v1, v2)
	}

	removeEdge(v1: string, v2: string) {
		const edgeName = super.getEdge(v1, v2)
		if (edgeName) this.#weights.delete(edgeName)
		return super.removeEdge(v1, v2)
	}

	dfsIterative(vertex: string, cb: (vertex: string) => void): void {}
}
