/**
 * {@link https://contest.yandex.ru/contest/66793/problems | Тренировки по алгоритмам 6.0 от Яндекса — Занятие 2 A. Префиксные суммы}
 */
const solution = (args) => {
	const arr = args[1].split(' ').map(Number)
	const prefix = Array(arr.length)

	for (let i = 0; i < arr.length; i++) {
		prefix[i] = (prefix[i - 1] ?? 0) + (arr[i] ?? 0)
	}

	return prefix.join(' ')
}

export { solution }
