/*
  time complexity: O(n)
  space complexity: O(n)
 */

export const temperatures = (days: number[]): number[] => {
	const warmDays = days.map(() => 0)
	const stack = []

	for (let i = days.length - 1; i >= 0; i--) {
		const day = days[i]

		while (stack.length) {
			const val = stack[stack.length - 1]

			if (day < val.day) {
				warmDays[i] = val.i - i
				stack.push({ day, i })
				break
			}

			stack.pop()
		}

		if (!stack.length) {
			stack.push({ day, i })
			warmDays[i] = 0
		}
	}

	return warmDays
}

const input = [17, 13, 12, 15, 11, 9, 12, 16]
const shouldBe = [0, 2, 1, 4, 2, 1, 1, 0]

console.log(temperatures(input))
