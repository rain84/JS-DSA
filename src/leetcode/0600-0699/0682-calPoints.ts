/**
 * 682. Baseball Game
 * {@link https://leetcode.com/problems/baseball-game/ | Link}
 *
 * Topics: Array | Stack | Simulation
 *
 * You are given a list of strings operations, where operations[i] is the ith operation
 * you must apply to the record and is one of the following:
 * - An integer x: Record a new score of x.
 * - '+': Record a new score that is the sum of the previous two scores.
 * - 'D': Record a new score that is the double of the previous score.
 * - 'C': Invalidate the previous score, removing it from the record.
 * Return the sum of all the scores on the record after applying all the operations.
 */
export function calPoints(operations: string[]): number {
	const stack: number[] = []

	for (const x of operations) {
		const { length } = stack

		switch (x) {
			case '+': {
				stack.push(stack[length - 1] + stack[length - 2])
				break
			}

			case 'D': {
				stack.push(stack[length - 1] * 2)
				break
			}

			case 'C': {
				stack.pop()
				break
			}

			default: {
				stack.push(+x)
			}
		}
	}

	return stack.reduce((a, b) => a + b, 0)
}

export function calPoints2(operations: string[]): number {
	const stack: number[] = []

	for (const op of operations) {
		if (op === 'C') {
			stack.pop()
		} else if (op === 'D') {
			stack.push(stack[stack.length - 1] * 2)
		} else if (op === '+') {
			stack.push(stack[stack.length - 1] + stack[stack.length - 2])
		} else {
			stack.push(Number(op))
		}
	}

	return stack.reduce((a, b) => a + b, 0)
}
