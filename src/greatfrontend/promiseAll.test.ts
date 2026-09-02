import { promiseAll } from './promiseAll'

it('resolves with values in order', async () => {
	const res = await promiseAll([1, Promise.resolve(2), Promise.resolve(3)])
	expect(res).toEqual([1, 2, 3])
})

it('resolves empty iterable', async () => {
	expect(await promiseAll([])).toEqual([])
})

it('rejects on first rejection', async () => {
	await expect(
		promiseAll([Promise.resolve(1), Promise.reject('err'), Promise.resolve(3)]),
	).rejects.toBe('err')
})

it('handles thenables', async () => {
	const thenable = { then: (resolve: any) => resolve(42) }
	expect(await promiseAll([thenable as any])).toEqual([42])
})

it('preserves order with delayed promises', async () => {
	const p1 = new Promise((r) => setTimeout(() => r(1), 30))
	const p2 = new Promise((r) => setTimeout(() => r(2), 10))
	expect(await promiseAll([p1, p2])).toEqual([1, 2])
})

it('handles non-promise values', async () => {
	expect(await promiseAll([1, 2, 3] as any)).toEqual([1, 2, 3])
})
