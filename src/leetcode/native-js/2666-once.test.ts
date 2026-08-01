import { once } from './2666-once'

it('once should work', () => {
	const fn = (a: number, b: number, c: number) => a + b + c
	const onceFn = once(fn)
	expect(onceFn(1, 2, 3)).toBe(6)
	expect(onceFn(1, 2, 3)).toBeUndefined()
})
