import { timeLimit } from './2637-timeLimit'

it('timeLimit should work 1', async () => {
	await expect(timeLimit(fn, 50)(5)).rejects.toThrow('Time Limit Exceeded')
})

it('timeLimit should work 2', async () => {
	await expect(timeLimit(fn, 150)(5)).resolves.toBe(25)
})

async function fn(n: number) {
	await new Promise((res) => setTimeout(res, 100))
	return n * n
}
