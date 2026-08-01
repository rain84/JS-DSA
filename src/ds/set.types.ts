// biome-ignore lint:
import { Set } from './set'

// TODO: refactor "T extends number"

export type Cb<T extends number> = (x1: T, x2: T, set: Set<T>) => void

export interface ISet<T extends number> {
	size: number
	readonly [Symbol.toStringTag]: string

	add(value: T): this
	has(value: T): boolean
	clear(): void
	delete(value: T): boolean

	// biome-ignore lint:
	forEach(cb: Cb<T>, thisArg?: any): void

	[Symbol.iterator](): IterableIterator<T>
	entries(): IterableIterator<[T, T]>
	keys(): IterableIterator<T>
	values(): IterableIterator<T>
}
