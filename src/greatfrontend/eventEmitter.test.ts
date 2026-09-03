import { EventEmitter } from './eventEmitter'

it('emits args to listeners in registration order (GFE example)', () => {
	const emitter = new EventEmitter()
	const calls: string[] = []
	const add = (a: number, b: number) => calls.push(`sum is ${a + b}`)
	emitter.on('foo', add)
	expect(emitter.emit('foo', 2, 5)).toBe(true)
	expect(calls).toEqual(['sum is 7'])

	emitter.on('foo', (a: number, b: number) => calls.push(`product is ${a * b}`))
	emitter.emit('foo', 4, 5)
	expect(calls).toEqual(['sum is 7', 'sum is 9', 'product is 20'])

	emitter.off('foo', add)
	emitter.emit('foo', -3, 9)
	expect(calls).toEqual(['sum is 7', 'sum is 9', 'product is 20', 'product is -27'])
})

it('on/off return this for chaining', () => {
	const emitter = new EventEmitter()
	const fn = () => {}
	expect(emitter.on('a', fn)).toBe(emitter)
	expect(emitter.off('a', fn)).toBe(emitter)
})

it('emit returns false when no listeners', () => {
	const emitter = new EventEmitter()
	expect(emitter.emit('missing')).toBe(false)
	const fn = () => {}
	emitter.on('a', fn)
	emitter.off('a', fn)
	expect(emitter.emit('a')).toBe(false)
})

it('duplicate registrations are separate; one off removes one', () => {
	const emitter = new EventEmitter()
	let count = 0
	const fn = () => count++
	emitter.on('e', fn)
	emitter.on('e', fn)
	emitter.emit('e')
	expect(count).toBe(2)
	emitter.off('e', fn)
	emitter.emit('e')
	expect(count).toBe(3)
})

it('off with missing event/listener is a no-op', () => {
	const emitter = new EventEmitter()
	const fn = () => {}
	expect(() => emitter.off('nope', fn)).not.toThrow()
	emitter.on('a', fn)
	const other = () => {}
	expect(() => emitter.off('a', other)).not.toThrow()
	expect(emitter.emit('a')).toBe(true)
})

it('isolates listeners between instances', () => {
	const e1 = new EventEmitter()
	const e2 = new EventEmitter()
	let n = 0
	e1.on('x', () => n++)
	expect(e2.emit('x')).toBe(false)
	expect(n).toBe(0)
	expect(e1.emit('x')).toBe(true)
	expect(n).toBe(1)
})

it('handles prototype-colliding event names like toString', () => {
	const emitter = new EventEmitter()
	let n = 0
	emitter.on('toString', () => n++)
	expect(emitter.emit('toString')).toBe(true)
	expect(n).toBe(1)
})

it('emit uses a snapshot: listeners added during emit run on next emit only', () => {
	const emitter = new EventEmitter()
	const order: string[] = []
	emitter.on('e', () => {
		order.push('a')
		emitter.on('e', () => order.push('c'))
	})
	emitter.on('e', () => order.push('b'))
	emitter.emit('e')
	expect(order).toEqual(['a', 'b'])
	emitter.emit('e')
	expect(order).toEqual(['a', 'b', 'a', 'b', 'c'])
})

it('emit uses a snapshot: listener removed during emit still runs this emit', () => {
	const emitter = new EventEmitter()
	const order: string[] = []
	const b = () => order.push('b')
	emitter.on('e', () => {
		order.push('a')
		emitter.off('e', b)
	})
	emitter.on('e', b)
	emitter.emit('e')
	expect(order).toEqual(['a', 'b'])
	order.length = 0
	emitter.emit('e')
	expect(order).toEqual(['a'])
})
