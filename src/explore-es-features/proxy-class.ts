export class ProxyClass {
	private handler() {
		return 'handled'
	}
}

const p = new Proxy(ProxyClass.prototype, {
	get(target, p, receiver) {
		console.log('target, p, receiver', target, p, receiver)
	},
})
