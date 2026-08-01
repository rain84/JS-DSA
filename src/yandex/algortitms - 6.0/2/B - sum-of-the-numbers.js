/**
 * {@link https://contest.yandex.ru/contest/66793/problems/B/ | Тренировки по алгоритмам 6.0 от Яндекса — Занятие 2 B. Сумма номеров}
 */
const solution = (args) => {
	args = args.map((x) => x.split(' ').map(Number))
	const [n, k] = args[0]
	const arr = args[1]

	if (!n) return 0

	let [res, sum, l, r] = [0, 0, 0, 0]
	while (l < n || r < n) {
		if (sum < k) {
			if (r < n) sum += arr[r++]
			else break
		} else if (sum > k) {
			if (l < n) sum -= arr[l++]
			else break
		} else {
			res++
			if (r < n) sum += arr[r++]
			else if (l < n) sum -= arr[l++]
			else break
		}
	}

	return res
}

export { solution }
