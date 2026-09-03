/**
 * GreatFrontEnd — Event Emitter
 * {@link https://www.greatfrontend.com/questions/javascript/event-emitter | Link}
 */
export type Listener<Args extends unknown[] = never[]> = (...args: Args) => void

interface Emitter {
	on<Args extends unknown[]>(eventName: string, listener: Listener<Args>): Emitter
	off<Args extends unknown[]>(eventName: string, listener: Listener<Args>): Emitter
	emit<Args extends unknown[]>(eventName: string, ...args: Args): boolean
}

export class EventEmitter implements Emitter {
	#store: Map<string, Listener[]> = new Map()

	on<Args extends unknown[]>(eventName: string, listener: Listener<Args>): Emitter {
		if (!this.#store.has(eventName)) {
			this.#store.set(eventName, [])
		}
		this.#store.get(eventName)!.push(listener as unknown as Listener)

		return this
	}

	off<Args extends unknown[]>(eventName: string, listener: Listener<Args>): Emitter {
		if (this.#store.has(eventName)) {
			const events = this.#store.get(eventName)!
			const index = events.indexOf(listener as unknown as Listener)

			if (index !== -1) {
				events.splice(index, 1)
			}

			if (events.length === 0) {
				this.#store.delete(eventName)
			} else {
				this.#store.set(eventName, events)
			}
		}

		return this
	}

	emit<Args extends unknown[]>(eventName: string, ...args: Args): boolean {
		if (!this.#store.has(eventName)) {
			return false
		}

		;[...this.#store.get(eventName)!].forEach(
			(cb) => void (cb as unknown as Listener<Args>)(...args),
		)

		return true
	}
}
