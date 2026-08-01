interface ITarget<T = number> {
	[K: string]: T
}
const target: ITarget = {
	val: 7,
}

const handler: ProxyHandler<ITarget> = {
	get: (target: ITarget, name: string) => target[name],

	set: (target: ITarget, prop: string, val: number) => {
		console.log('set', prop, val)
		target[prop] = val
		return true
	},
}

const p = new Proxy(target, handler)

console.log(++p.val)
console.log(++p.val)
