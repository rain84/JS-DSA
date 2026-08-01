import { resolve } from './promise'

it('should asynchronously resolves deferred data', async () => {
	await expect(resolve(5, 1)).resolves.toBe(5)
	await expect(resolve(75, 0)).resolves.toBe(75)
})

it('should immediately resolves sync data', async () => {
	await expect(resolve(5)).resolves.toBe(5)
	await expect(resolve()).resolves.toBeUndefined()
})
