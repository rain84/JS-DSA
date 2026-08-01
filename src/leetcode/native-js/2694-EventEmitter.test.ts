import { EventEmitter } from './2694-EventEmitter'

it('should work 1', () => {
	const emitter = new EventEmitter()

	emitter.emit('firstEvent')
	let res = emitter.emit('firstEvent')
	expect(res).toMatchObject([])

	emitter.subscribe('firstEvent', () => 5)
	emitter.subscribe('firstEvent', () => 6)
	res = emitter.emit('firstEvent')
	expect(res).toMatchObject([5, 6])
})

it('should work 2', () => {
	const emitter = new EventEmitter()

	emitter.subscribe('firstEvent', function cb1(...args) {
		return args.join(',')
	})

	let res = emitter.emit('firstEvent', [1, 2, 3])
	expect(res).toMatchObject(['1,2,3'])

	res = emitter.emit('firstEvent', [3, 4, 6])
	expect(res).toMatchObject(['3,4,6'])
})
