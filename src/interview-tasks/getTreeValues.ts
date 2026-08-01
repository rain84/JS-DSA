export type TTree = {
	value: number
	children?: TTree[]
}

const getTreeValues = (tree: TTree | TTree[] | undefined): number[] =>
	!tree
		? []
		: Array.isArray(tree)
			? tree.reduce((acc: number[], { value, children }) => {
					acc.push(value, ...(children ? getTreeValues(children) : []))
					return acc
				}, [])
			: [tree.value, ...getTreeValues(tree.children)]

const tree: TTree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [{ value: 3 }, { value: 4 }],
		},
		{
			value: 5,
			children: [{ value: 6 }, { value: 7 }],
		},
	],
}

console.log(`[${getTreeValues(tree)}] should be equals to [1, 2, 3, 4, 5, 6, 7]`)
