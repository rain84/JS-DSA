/**
 * {@link https://contest.yandex.ru/contest/66792/problems/B/ | Тренировки по алгоритмам 6.0 от Яндекса — Занятие 3 B. Великое Лайнландское переселение}
 */
const solution = (args) => {
	const nums = args[1].split(' ').map(Number)
	const n = nums.length
	const res = Array(n).fill(-1)
	const q = [[nums[n - 1], n - 1]]

	for (let i = n - 2; i >= 0; i--) {
		const x = nums[i]

		while (q.length && q.at(-1)[0] >= x) {
			q.pop()
		}

		if (q.length) {
			res[i] = q.at(-1)[1]
		}

		q.push([nums[i], i])
	}

	return res.join(' ')
}

export { solution }
