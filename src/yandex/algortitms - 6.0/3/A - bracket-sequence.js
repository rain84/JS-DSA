/**
 * {@link https://contest.yandex.ru/contest/66794/problems/ | Тренировки по алгоритмам 6.0 от Яндекса — Занятие 3 A. Правильная скобочная последовательность}
 */
const solution = (args) => {
	const s = args[0]
	const stk = []
	const pairs = {
		')': '(',
		']': '[',
		'}': '{',
	}

	for (const x of s) {
		if (pairs[x]) {
			if (stk.pop() !== pairs[x]) return 'no'
		} else {
			stk.push(x)
		}
	}

	return stk.length ? 'no' : 'yes'
}

export { solution }
