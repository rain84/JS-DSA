export interface ISubscriber<T> {
	update(payload: T): void
}

export interface IPublisher<T> {
	subscribe(c: ISubscriber<T>): void
	unsubscribe(c: ISubscriber<T>): void
	notify(): void
}

export class ConcretePublisher<T> implements IPublisher<T> {
	#data: MaybeNull<T> = null
	#subscribers: ISubscriber<T>[] = []

	subscribe(c: ISubscriber<T>) {
		this.#subscribers.push(c)
	}

	unsubscribe(c: ISubscriber<T>) {
		this.#subscribers = this.#subscribers.filter((x) => x !== c)
	}

	notify() {
		if (this.#data === null) return
		for (const s of this.#subscribers) s.update(this.#data!)
	}

	set data(x: T) {
		this.#data = x
	}
}

type TGetNext<T> = (data: T) => T

export class ConcreteSubscriber<T> implements ISubscriber<T> {
	#data: MaybeUndefined<T> = undefined
	#getNext: TGetNext<T>

	constructor(getNext: TGetNext<T>) {
		this.#getNext = getNext
	}

	get data() {
		return this.#data
	}

	update(payload: T): void {
		this.#data = this.#getNext(payload)
	}
}
