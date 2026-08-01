import { HashTable } from './hash-table'

let hashTable: HashTable<number>
const data = 'The C Programming Language is a computer programming book\
 written by Brian Kernighan and Dennis Ritchie'.split(/\s+/)

beforeEach(() => {
	hashTable = new HashTable()
	data.forEach((key, val) => hashTable.set(key, val))
})

it('should have "set()" and "get()"', () => {
	expect(hashTable.get('The')).toBe(0)
	expect(hashTable.get('Language')).toBe(3)
	expect(hashTable.get('non-existent')).toBeUndefined()

	hashTable.set('prop', 42)
	expect(hashTable.get('prop')).toBe(42)
	hashTable.set('prop', 57)
	expect(hashTable.get('prop')).toBe(57)

	hashTable = new HashTable(1)
	hashTable.set('prop1', 1)
	hashTable.set('prop2', 2)
	hashTable.set('prop3', 3)
	expect(hashTable.get('prop1')).toBe(1)
	expect(hashTable.get('prop2')).toBe(2)
	expect(hashTable.get('prop3')).toBe(3)
})

it('should have "delete()"', () => {
	hashTable.delete('The')
	expect(hashTable.get('The')).toBeUndefined()

	hashTable.delete('non-existent')
	expect(hashTable.get('non-existent')).toBeUndefined()

	hashTable = new HashTable(1)
	hashTable.set('prop1', 1)
	hashTable.set('prop2', 2)
	hashTable.set('prop3', 3)
	hashTable.delete('prop2')
	expect(hashTable.get('prop1')).toBe(1)
	expect(hashTable.get('prop2')).toBeUndefined()
	expect(hashTable.get('prop3')).toBe(3)
})

it('should have "keys()"', () => {
	const keys = hashTable.keys()
	keys.sort()
	data.sort()

	expect(keys).toMatchObject(data)
})

it('should have "values()"', () => {
	const indexes = data.map((_, i) => i)
	const values = hashTable.values()
	values.sort((a, b) => (a as unknown as number) - (b as unknown as number))

	expect(values).toMatchObject(indexes)
})

it('should have "entries()"', () => {
	const entries = hashTable
		.entries()
		.reduce<string[]>((acc, [val, key]) => ((acc[key] = val), acc), [])

	expect(entries).toMatchObject(data)
})
