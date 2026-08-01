/*   
Given a tree where each edge has a weight,
compute the length of the longest path in the tree.
For example, given the following tree:

   a
  /|\
 b c d
    / \
   e   f
  / \
 g   h

and the weights: a - b: 3, a - c: 5, a - d: 8, d - e: 2, d - f: 4, e - g: 1, e - h: 1,
the longest path would be c -> a -> d -> f, with a length of 17.

The path does not have to pass through the root,
and each node can have any amount of children.
*/

interface INode {
	name: string
	weight: number
	children?: INode[]
}

interface ITraversable {
	get maxpathForRoot(): number
	get maxpath(): number
}

interface ITree extends INode, ITraversable {
	add(...nodes: ITree[]): ITree
}

export class CNode implements ITree {
	children?: INode[]
	private _maxpathForRoot = 0

	constructor(
		public name = 'node',
		public weight = 0,
	) {}

	add(...nodes: ITree[]): ITree {
		if (!this.children) this.children = []
		this.children.push(...nodes)

		return this
	}

	get maxpathForRoot() {
		if (!this._maxpathForRoot) {
			this._maxpathForRoot = this.weight

			if (this?.children?.length) {
				this._maxpathForRoot += this.maxPathForChildren()
			}
		}

		return this._maxpathForRoot
	}

	get maxpath() {
		const maxpathsOfChildren = this?.children
			?.map((node) => (node as ITree).maxpath)
			.sort((a, b) => b - a)
		const previousMax = maxpathsOfChildren?.[1] ?? 0

		return this.maxpathForRoot + previousMax
	}

	private maxPathForChildren(): number {
		if (!this.children || !this.children.length) return 0

		const max = this.children?.map((node) => (node as ITree).maxpathForRoot)
		return Math.max(...max)
	}
}

// prettier-ignore
const tree = new CNode('a').add(
	new CNode('b', 3),
	new CNode('c', 5),
	new CNode('d', 8).add(
		new CNode('e', 2).add(new CNode('g', 1), new CNode('h', 1)),
		new CNode('f', 4),
	),
)

// biome-ignore lint:
function stringify(data: any) {
	return JSON.stringify(data, null, ' ')
}

// biome-ignore lint:
function log(data: any, msg?: string): void {
	const isObject = typeof data === 'object' && !Object.is(data, null)
	console.log(msg, isObject ? stringify(data) : data)
}

log(tree)
log(tree.maxpathForRoot, 'tree.maxpathForRoot')
log(tree.maxpath, 'tree.maxpath')
