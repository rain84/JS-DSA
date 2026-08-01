/**
 * {@link https://contest.yandex.ru/contest/66792/problems/B | Тренировки по алгоритмам 6.0 от Яндекса — Занятие 1 C. Надпись на табло}
 */
const solution = (args) => {
	let mtx = args.slice(1).map((x) => [...x])

	const transpose = () => {
		const [m, n] = [mtx.length, mtx[0].length]
		const res = Array.from({ length: n }, () => Array(m))

		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m; j++) {
				res[i][j] = mtx[j][i]
			}
		}

		mtx = res
	}

	const clear = () => {
		const predicate = (x) => String([...new Set(x)]) !== '.'
		const [l, r] = [mtx.findIndex(predicate), mtx.findLastIndex(predicate)]
		mtx = mtx.slice(l, r + 1) ?? [[]]
	}

	const compress = () => {
		for (let i = 1; i < mtx.length; ) {
			const isEqual = String(mtx[i - 1]) === String(mtx[i])

			if (isEqual) mtx.splice(i, 1)
			else i++
		}
	}

	const maybe = (f) => (mtx[0]?.length ? f() : null)

	const operations = [clear, compress, transpose, clear, compress, transpose]
	for (const f of operations) maybe(f)

	const symbols = {
		'#': 'I',
		[[
			['#', '#', '#'],
			['#', '.', '#'],
			['#', '#', '#'],
		]]: 'O',
		[[
			['#', '#'],
			['#', '.'],
			['#', '#'],
		]]: 'C',
		[[
			['#', '.'],
			['#', '#'],
		]]: 'L',
		[[
			['#', '.', '#'],
			['#', '#', '#'],
			['#', '.', '#'],
		]]: 'H',
		[[
			['#', '#', '#'],
			['#', '.', '#'],
			['#', '#', '#'],
			['#', '.', '.'],
		]]: 'P',
	}

	return symbols[mtx.toString()] ?? 'X'
}

export { solution }
