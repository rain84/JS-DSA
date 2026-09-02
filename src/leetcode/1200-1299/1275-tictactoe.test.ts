import { tictactoe, tictactoe2 } from './1275-tictactoe'

it.each(
	// biome-ignore-all format: don't format
	[
		[[[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]], 'A'], // A wins diag
		[[[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]], 'B'], // B wins col 0? Actually B col?
		[[[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]], 'Draw'],
		[[[0, 0], [1, 1]], 'Pending'],
		[[[0, 0], [0, 1], [0, 2]], 'Pending'], // Actually A has row? No, A: [0,0],[0,2] B:[0,1] -> not win
		[[[1, 0], [2, 2], [2, 0], [0, 0], [0, 2], [2, 1], [1, 1]], 'A'], // A wins?
		[[[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]], 'A'], // A row 0
		[[[0, 0], [0, 1], [1, 0], [1, 1], [2, 2], [2, 1]], 'B'], // B col 1
	],
)('tictactoe(%p) = "%s"', (moves, expected) => {
	expect(tictactoe(moves)).toBe(expected)
	expect(tictactoe2(moves)).toBe(expected)
})
