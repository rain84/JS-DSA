const subscribe = Symbol('subscribe')
const unsubscribe = Symbol('unsubscribe')

class Reactive {
	#ref
	#operator
	#subscribers = []
	#sources = []
	#shouldUpdate = false

	static #MESSAGE = {
		EMPTY_ARGS: '_() must be invoked with arguments',
		WRONG_ARGUMENTS:
			'Should be invoked in 1 of 2 ways: 1) with a single argument, 2) or with several arguments, when the 1st is a function and the rest should be instances of the Reactive-class',
	}

	static #isSingleArgument = (...args) => args.length === 1
	static #isReactiveValue = (r) => r instanceof Reactive
	static #isSubscription = (operator, ...rs) =>
		typeof operator === 'function' && rs.every(Reactive.#isReactiveValue)

	constructor(...args) {
		if (args.length === 0) throw new Error(Reactive.#MESSAGE.EMPTY_ARGS)

		// unboxing reactive value
		if (Reactive.#isReactiveValue(args[0])) {
			const { ref } = args[0]
			args[0].ref = null
			args[0] = ref
		}

		// create new reactive object with value
		if (Reactive.#isSingleArgument(...args)) {
			this.#ref = args[0]
		}

		// create new reactive object with subscription for another reactive objects
		else if (Reactive.#isSubscription(...args)) {
			const [operator, ...sources] = args
			this.#operator = operator
			this.#sources = sources
			for (const s of this.#sources) s[subscribe](this.#cb)
			this.#shouldUpdate = true
		}

		// wrong arguments
		else throw new Error(Reactive.#MESSAGE.WRONG_ARGUMENTS)
	}

	get ref() {
		if (this.#shouldUpdate) {
			const values = this.#sources.map(({ ref }) => ref)
			this.#ref = this.#operator(...values)
			for (const cb of this.#subscribers) cb()
			this.#shouldUpdate = false
		}

		return this.#ref
	}

	set ref(next) {
		this.#ref = next
		for (const cb of this.#subscribers) cb()

		if (Array.isArray(this.#sources)) {
			for (const s of this.#sources) s[unsubscribe](this.#cb)
			this.#sources.length = 0
		}
	}

	[subscribe](cb) {
		this.#subscribers.push(cb)
	}

	[unsubscribe](cb) {
		this.#subscribers = this.#subscribers.filter((fn) => fn !== cb)
	}

	#cb = () => {
		this.#shouldUpdate = true
	}
}

export const _ = (...args) => new Reactive(...args)
