import { BST } from './tree-bst'

interface IShape {
	key: number
	val: string
}

interface ITree<T> {
	instance: BST<T>
	values: T[]
	push: (val: T) => void
	toString: () => string
}

const selector = {
	identity: (val: number) => val,
	shape: (val: IShape) => val.key,
}

class Tree<T> {
	instance: BST<T>
	values: T[] = []
	#dataSelector: (val: T) => unknown

	constructor(keySelector: (val: T) => number, dataSelector: (val: T) => unknown) {
		this.#dataSelector = dataSelector
		this.instance = new BST<T>(keySelector)
	}

	push = (val: T) => {
		this.values.push(val)
	}

	toString() {
		return this.values.map(this.#dataSelector).join('')
	}
}

let tree: {
	number: ITree<number>
	shape: ITree<IShape>
}

beforeEach(() => {
	tree = {
		number: new Tree<number>(selector.identity, selector.identity),
		shape: new Tree<IShape>(selector.shape, ({ val }: IShape) => val),
	}

	/*
        2
         \
          7    
        /   \
       5     9
    */
	tree.number.instance.insert(2).insert(7).insert(5).insert(9)

	/*
        5(c)
        /   \
      3(b)  7(d)
     /         \
    1(a)       9(e) 
    */
	tree.shape.instance
		.insert({ key: 5, val: 'c' })
		.insert({ key: 3, val: 'b' })
		.insert({ key: 1, val: 'a' })
		.insert({ key: 7, val: 'd' })
		.insert({ key: 9, val: 'e' })
})

it('should have "infixTraverse()"', () => {
	tree.shape.instance.dfsInfix(tree.shape.push)
	expect(tree.shape.toString()).toBe('abcde')

	tree.number.instance.dfsInfix(tree.number.push)
	expect(tree.number.toString()).toBe('2579')
})

it('should have "prefixTraverse()"', () => {
	tree.shape.instance.dfsPrefix(tree.shape.push)
	expect(tree.shape.toString()).toBe('cbade')

	tree.number.instance.dfsPrefix(tree.number.push)
	expect(tree.number.toString()).toBe('2759')
})

it('should have "postfixTraverse()"', () => {
	tree.shape.instance.dfsPostfix(tree.shape.push)
	expect(tree.shape.toString()).toBe('abedc')

	tree.number.instance.dfsPostfix(tree.number.push)
	expect(tree.number.toString()).toBe('5972')
})

it('should have "bsfTraverse()"', () => {
	tree.shape.instance.bfs(tree.shape.push)
	expect(tree.shape.toString()).toBe('cbdae')

	tree.number.instance.bfs(tree.number.push)
	expect(tree.number.toString()).toBe('2759')
})

it('should have "search()"', () => {
	let result: number | IShape | undefined = tree.number.instance.search(9)
	expect(result).toBe(9)

	result = tree.number.instance.search(99)
	expect(result).toBeUndefined()

	result = tree.shape.instance.search(9)
	expect(result!.val).toBe('e')

	result = tree.shape.instance.search(99)
	expect(result).toBeUndefined()
})

it('should traverse', () => {
	/*
        10
       /  \
      6    15
     / \     \
    3   8    20
    */

	const tree = new BST<number>(selector.identity)
	for (const x of [10, 6, 3, 8, 15, 20]) tree.insert(x)

	const values: number[] = []

	tree.dfsInfix((val) => values.push(val))
	expect(values.join()).toBe('3,6,8,10,15,20')

	values.length = 0
	tree.dfsPrefix((val) => values.push(val))
	expect(values.join()).toBe('10,6,3,8,15,20')

	values.length = 0
	tree.dfsPostfix((val) => values.push(val))
	expect(values.join()).toBe('3,8,6,20,15,10')

	values.length = 0
	tree.bfs((val) => values.push(val))
	expect(values.join()).toBe('10,6,15,3,8,20')
})
