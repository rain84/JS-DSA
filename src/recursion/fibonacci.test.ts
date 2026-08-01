import { fib1, fib2, fib4 } from './fibonacci'

it.each(
	//  prettier-ignore
	[
		[fib1, output()],
		[fib2, output()],
		[fib2, output()],
		[fib4, output()],
	],
)('should work %#', (fib, output) => {
	expect(fib(0)).toBe(0)
	expect(fib(1)).toBe(1)
	expect(fib(2)).toBe(1)
	const fibs = Array.from({ length: output.length }, (_, i) => fib(i))
	expect(fibs).toMatchObject(output)
})

function output() {
	return [
		0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946,
		17711,
	]
}
