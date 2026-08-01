/**
 * 2694. Event Emitter
 * {@link https://leetcode.com/problems/event-emitter/ | Link}
 */
export class EventEmitter {
	#handlers = new Map<string, Callback[]>()

	subscribe(eventName: string, cb: Callback): Subscription {
		const cbs = this.#handlers.get(eventName) ?? []
		cbs.push(cb)
		this.#handlers.set(eventName, cbs)

		return {
			unsubscribe: () => {
				if (!this.#handlers.has(eventName)) return

				const cbs = this.#handlers.get(eventName)?.filter((x) => x !== cb) ?? []

				if (cbs.length) this.#handlers.set(eventName, cbs)
				else this.#handlers.delete(eventName)
			},
		}
	}

	emit(eventName: string, args: unknown[] = []): unknown[] {
		return this.#handlers.get(eventName)?.map((cb) => cb(...args)) ?? []
	}
}

type Callback = (...args: unknown[]) => unknown
type Subscription = {
	unsubscribe: () => void
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
