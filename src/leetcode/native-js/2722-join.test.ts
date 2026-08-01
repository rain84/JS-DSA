import { join } from './2722-join'

it('should work 1', () => {
	const a1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
	const a2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]
	const res = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }]

	expect(join(a1, a2)).toMatchObject(res)
})

it('should work 2', () => {
	const a1 = [
		{ id: 1, x: 2, y: 3 },
		{ id: 2, x: 3, y: 6 },
	]
	const a2 = [
		{ id: 2, x: 10, y: 20 },
		{ id: 3, x: 0, y: 0 },
	]
	const res = [
		{ id: 1, x: 2, y: 3 },
		{ id: 2, x: 10, y: 20 },
		{ id: 3, x: 0, y: 0 },
	]

	expect(join(a1, a2)).toMatchObject(res)
})
