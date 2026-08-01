import { applyNumberMonkeyPatching } from './task-from-arian'

it('should work', () => {
	const fn = (operator, i) => {
		const res = []

		do res.push(operator(i))
		while (--i)

		return res
	}

	applyNumberMonkeyPatching(fn)

	const data = [
		{ number: 5, operator: (x) => x + 1, expected: [6, 5, 4, 3, 2] },
		{ number: 2, operator: (x) => x * 5, expected: [10, 5] },
		{ number: 3, operator: (x) => x - 1, expected: [2, 1, 0] },
	]

	for (const { number, operator, expected } of data) {
		const res = number[operator]
		console.log(res)
		console.assert(res.toString(), expected.toString(), 'wrong!')
	}
})
