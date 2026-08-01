import { delay, seconds } from './time'

it('seconds() should work', () => {
	const time = (Date.now() / 1000) | 0
	expect(seconds()).toBe(time)
})

it('seconds.last1000() should work', () => {
	const time = ((Date.now() / 1000) | 0) % 1000
	expect(seconds.last1000()).toBe(time)
})

it('wait() should work', async () => {
	const time = 1000
	const expired = ((Date.now() + time) / 1000) | 0
	await delay(time)
	const now = (Date.now() / 1000) | 0

	expect(expired).toBe(now)
})
