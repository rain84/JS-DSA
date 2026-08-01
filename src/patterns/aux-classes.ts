import { EventEmitter } from './event-emitter'

export enum EVENT_TYPES {
	INCREMENT = 'INCREMENT',
	'A:INCREMENT' = 'A:INCREMENT',
	DECREMENT = 'DECREMENT',
	ONLY_ONCE = 'ONLY_ONCE',
}

export class ClassA extends EventEmitter {
	private _counter = 0

	get counter() {
		return this._counter
	}

	set counter(val: number) {
		this._counter = val
	}

	constructor() {
		super()

		this.on(EVENT_TYPES.INCREMENT, () => this._counter++)
		this.on(EVENT_TYPES['A:INCREMENT'], () => this._counter++)
		this.on(EVENT_TYPES.DECREMENT, () => this._counter--)
		this.once(EVENT_TYPES.ONLY_ONCE, () => (this._counter += 100))
	}
}

export class ClassB extends EventEmitter {
	private _counter = 0

	get counter() {
		return this._counter
	}
	constructor() {
		super()

		this.on(EVENT_TYPES.INCREMENT, () => (this._counter += 2))
		this.on(EVENT_TYPES['A:INCREMENT'], () => this._counter++)
		this.on(EVENT_TYPES.DECREMENT, () => (this._counter -= 2))
		this.once(EVENT_TYPES.ONLY_ONCE, () => (this._counter += 200))
	}
}
