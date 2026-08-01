import { Promise_, reject, resolve } from './promise'

it('should process array of resolved promises"', async () => {
	expect.assertions(1)
	return expect(Promise_.race([resolve(1, 2), resolve(2, 3), resolve(3, 1)])).resolves.toBe(3)
})

it('should process array of resolved and rejected promises', async () => {
	expect.assertions(1)
	return expect(Promise_.race([reject(4, 2), resolve(5, 3), resolve(6, 1)])).resolves.toBe(6)
})

it('should process array of resolved and rejected promises 2', async () => {
	expect.assertions(1)
	return expect(Promise_.race([resolve(7, 2), reject(8, 3), resolve(9, 1)])).resolves.toBe(9)
})

it('should process array of rejected promises', async () => {
	expect.assertions(1)
	return expect(
		Promise_.race([reject(10, 2), reject(41), reject(11, 3), reject(12, 1)]),
	).resolves.toBe(41)
})

it('should process array of non-promise values', async () => {
	expect.assertions(1)
	return expect(Promise_.race([2, 4, 6])).resolves.toBe(2)
})

it('should process array of non-promise values and promises', async () => {
	expect.assertions(1)
	return expect(Promise_.race([2, 4, 6, resolve(1, 1), resolve(3, 2)])).resolves.toBe(2)
})
