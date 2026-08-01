import { reject } from './promise'

it('should asynchronously rejects deferred data', async () => {
	await expect(reject(5, 1)).rejects.toBe(5)
	await expect(reject(75, 0)).rejects.toBe(75)
})

it('should immediately rejects sync data', async () => {
	await expect(reject(5)).rejects.toBe(5)
	await expect(reject()).rejects.toBeUndefined()
})
