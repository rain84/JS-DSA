import { performance as perf } from 'node:perf_hooks'
export const log =
	(before?: string, after?: string) => (target: Fn, ctx: ClassMethodDecoratorContext) => {
		const methodName = String(ctx.name)
		function decorator(this: Any, ...args: Any[]) {
			console.log(before ?? `START: ${methodName}()`)
			const res = target.apply(this, args)
			if (!before || after) console.log(after ?? `END: ${methodName}()`)
			return res
		}
		return decorator
	}

export const performance =
	(iterations = 100_000) =>
	(target: Fn, ctx: ClassMethodDecoratorContext) => {
		const methodName = String(ctx.name)
		function decorator(this: Any, ...args: Any[]) {
			let i = iterations
			const startTime = perf.now()
			while (i--) target.apply(this, args)
			const res = target.apply(this, args)
			const execTime = (perf.now() - startTime) / (iterations + 1)
			console.log(`Execution time of ${methodName}(): ${execTime.toFixed(4)} ms`)
			return res
		}
		return decorator
	}

export const bound = (target: Fn, ctx: ClassMethodDecoratorContext) => {
	const methodName = String(ctx.name)
	if (ctx.private) throw new Error(`'bound' cannot decorate private properties like ${methodName}.`)

	ctx.addInitializer(function (this: Any) {
		this[methodName] = this[methodName].bind(this)
	})
}

// class Person {
//   constructor(private name: string) {}

//   @bound
//   @log()
//   greet() {
//     console.log('Hello ' + this.name)
//   }
// }

// const p = new Person('Ron!')
// const { greet } = p
// greet()
