import { getElementsByClassName } from './getElementsByClassName'

// biome-ignore lint/suspicious/noExplicitAny: test mock
function mockEl(className = '', children: any[] = []): any {
	return {
		classList: { contains: (c: string) => className.split(' ').includes(c) },
		children,
	}
}

it('finds elements by class', () => {
	const span1 = mockEl('foo bar')
	const span2 = mockEl('foo')
	const p = mockEl('', [span2])
	const div = mockEl('foo', [span1, p])
	const root = mockEl('', [div])
	expect(getElementsByClassName(root, 'foo')).toHaveLength(3)
})

it('returns empty if not found', () => {
	const root = mockEl('', [mockEl('')])
	expect(getElementsByClassName(root, 'foo')).toEqual([])
})

it('matches exact class, not substring', () => {
	const root = mockEl('', [mockEl('foobar'), mockEl('foo')])
	expect(getElementsByClassName(root, 'foo')).toHaveLength(1)
})

it('does not include root itself', () => {
	const root = mockEl('foo', [mockEl('foo')])
	expect(getElementsByClassName(root, 'foo')).toHaveLength(1)
})

it('handles deep nesting', () => {
	let leaf = mockEl('target')
	for (let i = 0; i < 5; i++) leaf = mockEl('', [leaf])
	const root = mockEl('', [leaf])
	expect(getElementsByClassName(root, 'target')).toHaveLength(1)
})

it('handles multiple siblings at same level', () => {
	const root = mockEl('', [mockEl('foo'), mockEl('foo'), mockEl('bar'), mockEl('foo')])
	expect(getElementsByClassName(root, 'foo')).toHaveLength(3)
})

it('handles element with multiple classes', () => {
	const el = mockEl('foo bar baz')
	const root = mockEl('', [el])
	expect(getElementsByClassName(root, 'bar')).toHaveLength(1)
	expect(getElementsByClassName(root, 'baz')).toHaveLength(1)
})

it('returns empty for empty root', () => {
	const root = mockEl('', [])
	expect(getElementsByClassName(root, 'foo')).toEqual([])
})

it('preserves DFS order', () => {
	const c = mockEl('foo')
	const b = mockEl('foo', [c])
	const a = mockEl('foo', [b])
	const root = mockEl('', [a])
	const res = getElementsByClassName(root, 'foo')
	expect(res[0]).toBe(a)
	expect(res[1]).toBe(b)
	expect(res[2]).toBe(c)
})
