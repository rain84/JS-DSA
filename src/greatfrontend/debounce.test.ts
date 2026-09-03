import { debounce } from './debounce'

it('should debounce trailing calls', async () => {
	let count = 0
	const fn = debounce(() => count++, 30)

	fn()
	fn()
	fn()
	expect(count).toBe(0)
	await new Promise((r) => setTimeout(r, 50))
	expect(count).toBe(1)
})

it('should use last args and this', async () => {
	let received: any[] = []
	const fn = debounce(function (this: any, ...args: any[]) {
		received = args
	}, 20)

	fn(1, 2)
	fn(3, 4)
	await new Promise((r) => setTimeout(r, 40))
	expect(received).toEqual([3, 4])
})

it('cancel() should prevent invocation', async () => {
	let count = 0
	const fn = debounce(() => count++, 30) as any
	fn()
	fn.cancel()
	await new Promise((r) => setTimeout(r, 50))
	expect(count).toBe(0)
})

it('should debounce multiple bursts', async () => {
	let count = 0
	const fn = debounce(() => count++, 20)
	fn()
	await new Promise((r) => setTimeout(r, 30))
	expect(count).toBe(1)
	fn()
	fn()
	await new Promise((r) => setTimeout(r, 30))
	expect(count).toBe(2)
})
