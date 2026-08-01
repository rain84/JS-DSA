import { Promise_, resolve, reject } from './promise'

type TPromises = Record<string, Array<unknown | Promise<unknown>>>

// prettier-ignore
const expectedPromises: TPromises = {
	allResolved: [resolve(1, 2), resolve(2, 3), resolve(3, 1)],
	firstRejected: [reject(4, 2), resolve(5, 3), resolve(6, 1)],
	secondRejected: [resolve(7, 2), reject(8, 3), resolve(9, 1)],
	allRejected: [reject(10, 2), reject(11, 3), reject(12, 1)],
	values: [2, 4, 6],
	mixedValues: [2, 4, 6, resolve(1, 1), resolve(3, 2)],
}

beforeAll(waitForAllSettled)

it('should resolve all', async () => {
	expect.assertions(1)
	return expect(Promise_.all(expectedPromises.allResolved)).resolves.toEqual([1, 2, 3])
})

it('should reject 1st', async () => {
	expect.assertions(1)
	return expect(Promise_.all(expectedPromises.firstRejected)).rejects.toBe(4)
})

it('should reject 2st', async () => {
	expect.assertions(1)
	return expect(Promise_.all(expectedPromises.secondRejected)).rejects.toBe(8)
})

it('should reject all', async () => {
	expect.assertions(1)
	return expect(Promise_.all(expectedPromises.allRejected)).rejects.toBe(10)
})

it('should resolve non-promise values', async () => {
	expect.assertions(1)
	return expect(Promise_.all(expectedPromises.values)).resolves.toEqual([2, 4, 6])
})

it('should resolve mixed values', async () => {
	expect.assertions(1)
	return expect(Promise_.all(expectedPromises.mixedValues)).resolves.toEqual([2, 4, 6, 1, 3])
})

async function waitForAllSettled() {
	const promises = Object.values(expectedPromises)
		.filter(Boolean)
		.reduce((acc, val) => {
			if (Array.isArray(val)) acc.push(...val)
			else acc.push(val)
			return acc
		}, [])

	return await Promise.allSettled(promises)
}
