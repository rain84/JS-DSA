import { timeLimit } from './2637-timeLimit'

it('timeLimit should work 1', async () => {
	const fn = async (n: number) => {
		await new Promise((res) => setTimeout(res, 100))
		return n * n
	}
	await expect(timeLimit(fn, 50)([5])).rejects.toBe('Time Limit Exceeded')
})

it('timeLimit should work 2', async () => {
	const fn = async (n: number) => {
		await new Promise((res) => setTimeout(res, 100))
		return n * n
	}
	await expect(timeLimit(fn, 150)(5)).resolves.toBe(25)
})

it('timeLimit should work 3', async () => {
	const fn = async (a: number, b: number) => {
		await new Promise((res) => setTimeout(res, 120))
		return a + b
	}
	await expect(timeLimit(fn, 150)(5, 10)).resolves.toBe(15)
})

it('timeLimit should work 4', async () => {
	const fn = async () => {
		throw 'Error'
	}
	await expect(timeLimit(fn, 1000)([])).rejects.toBe('Error')
})
