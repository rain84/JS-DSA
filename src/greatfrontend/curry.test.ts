import { curry } from './curry'

it('curries with correct arity', () => {
	const fn = (a: number, b: number, c: number) => a + b + c
	const curried = curry(fn)
	expect(curried(1)(2)(3)).toBe(6)
	expect(curried(1, 2)(3)).toBe(6)
	expect(curried(1, 2, 3)).toBe(6)
	expect(curried(1)(2, 3)).toBe(6)
})

it('preserves this', () => {
	const obj: any = { x: 10, fn(a: number, b: number) { return this.x + a + b } }
	obj.curried = curry(obj.fn)
	expect(obj.curried(5)(3)).toBe(18)
})

it('works with 0-arity', () => {
	const fn = () => 42
	expect(curry(fn)()).toBe(42)
})

it('accumulates args across calls', () => {
	const fn4 = (a: number, b: number, c: number, d: number) => a + b + c + d
	expect(curry(fn4)(1)(2)(3)(4)).toBe(10)
	expect(curry(fn4)(1, 2)(3, 4)).toBe(10)
})