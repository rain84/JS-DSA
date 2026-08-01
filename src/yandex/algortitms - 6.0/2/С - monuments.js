/**
 * {@link https://contest.yandex.ru/contest/66793/problems/C/ | Тренировки по алгоритмам 6.0 от Яндекса — Занятие 2 C. Город Че}
 */
const solution = (args) => {
	args = args.map((x) => x.split(' ').map(Number))
	const [n, k] = args[0]
	const arr = args[1]

	if (!n) return 0

	let [res, l, r] = [0, 0, 1]

	while (l < n && r < n) {
		if (arr[r] - arr[l] <= k) {
			if (r < n) r++
			else break
		} else {
			res += n - r
			if (l < n) l++
			else break
		}
	}

	return res
}

export { solution }

console.log(solution(['10 3', '11 38 46 49 57 59 62 65 67 72']))
