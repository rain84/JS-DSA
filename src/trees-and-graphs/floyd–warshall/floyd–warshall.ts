/**
 *  {@link https://tinyurl.com/p9x33wh | Floyd–Warshall algorithm}
 */
export const floyd_warshall = (g: number[][]) => {
	const [n, MAX] = [g.length, Number.POSITIVE_INFINITY]

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (g[i][j] === 0) g[i][j] = MAX
		}
	}

	for (let i = 0; i < n; i++) g[i][i] = 0

	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				g[i][j] = Math.min(g[i][j], g[i][k] + g[k][j])
			}
		}
	}

	return g
}
