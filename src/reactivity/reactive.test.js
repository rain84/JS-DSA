import { _ } from './reactive'

it('should work', () => {
	const a = _(1)
	const b = _(2)
	const c = _(3)

	const sum = (...args) => args.reduce((a, b) => a + b)
	const d = _(sum, a, b, c)

	expect(d.ref).toBe(6)

	a.ref++
	expect(d.ref).toBe(7) //  a = 2, b = 2, c = 3

	b.ref *= 2
	expect(d.ref).toBe(9) //  a = 2, b = 4, c = 3

	a.ref = null
	b.ref = null
	expect(d.ref).toBe(3) //  c = 3
})
