/**
 * {@link https://contest.yandex.ru/contest/66792/problems/B | Тренировки по алгоритмам 6.0 от Яндекса — Занятие 1 B. Майки и носки}
 * A & C - red t-shirts + socks
 * B & D - blue t-shirts + socks
 */
const solution = (args) => {
	const [a, b, c, d] = args.map(Number)
	const arr = []

	if (a && c) arr.push([b + 1, d + 1]) //  blue
	if (b && d) arr.push([a + 1, c + 1]) //  red
	if (a && b) arr.push([Math.max(a, b) + 1, 1]) //  both T-Shirts and any Socks
	if (c && d) arr.push([1, Math.max(c, d) + 1]) //  both Socks and any T-Shirts

	const res = arr.map((x) => [x[0] + x[1], x]).sort(([a], [b]) => a - b)[0][1]

	return res.join(' ')
}

export { solution }
