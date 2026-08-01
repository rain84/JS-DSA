import { promiseAll } from './2721-promiseAll'

it('should work 1', async () => {
	const input = [() => new Promise((resolve) => setTimeout(() => resolve(5), 200))]
	await expect(promiseAll(input)).resolves.toMatchObject([5])
})

it('should work 2', async () => {
	const input = [
		() => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
		() => new Promise((resolve, reject) => setTimeout(() => reject('Error'), 100)),
	]
	await expect(promiseAll(input)).rejects.toBe('Error')
})

it('should work 3', async () => {
	const input = [
		() => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
		() => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
		() => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
	]
	await expect(promiseAll(input)).resolves.toMatchObject([4, 10, 16])
})

it('should work 4', async () => {
	const input = [
		() => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
		() => new Promise((_, reject) => setTimeout(() => reject('Error'), 100)),
	]

	await expect(promiseAll(input)).rejects.toBe('Error')
})
