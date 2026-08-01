/**
 * {@link https://contest.yandex.ru/contest/66792/problems/C/ | Тренировки по алгоритмам 6.0 от Яндекса — Занятие 3 C. Минимум на отрезке}
 */
const solution = (args) => {
	const k = +args[0].split(' ')[1]
	const nums = args[1].split(' ').map(Number)
	const n = nums.length
	const res = []
	const q = [0]

	for (let i = 1; i < k - 2; i++) {
		while (q.length && nums[i] < nums[q.at(-1)]) {
			q.pop()
		}
		q.push(i)
	}

	for (let i = k - 1; i < n; i++) {
		while (q.length && nums[i] < nums[q.at(-1)]) {
			q.pop()
		}

		if (q.at(-1) !== i) q.push(i)
		res.push(nums[q[0]])

		if (i - k + 1 === q[0]) {
			q.shift()
		}
	}

	return res.join('\n')
}

export { solution }

console.log(solution(['7 1', '1 3 2 4 5 3 1']))

// '1 3 2 4 5 3 1',
//      1 2 2 3 1
