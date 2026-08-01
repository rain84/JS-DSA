import type { Decorator, Target } from './decorators.type'

class Flight<const T> {
	constructor(private dest: T[]) {}

	@test
	fly(to: T) {
		this.dest.push(to)
	}

	@test2
	fly2(to: T) {
		this.dest.push(to)
	}
}

const test: Decorator = (target, ctx) => {
	return function (this, ...args) {
		const res = target.apply(this, args)
		return res
	}
}

const test2 = <T, A extends Any[], R>(
	target: Target<T, A, R>,
	ctx: ClassMethodDecoratorContext<T, Target<T, A, R>>,
) => {
	console.log(ctx.name)
	return function (this: T, ...args: A): R {
		const res = target.apply(this, args)
		return res
	}
}
