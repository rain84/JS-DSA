/**
 * 1275. Find Winner on a Tic Tac Toe Game
 * {@link https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/ | Link}
 *
 * Topics: Array | Hash Table | Matrix | Simulation
 *
 * Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
 * Here are the rules:
 * - Players take turns placing characters into empty squares (' ').
 * - The first player A always places 'X' characters, while the second player B always places 'O' characters.
 * - 'X' and 'O' characters are always placed into empty squares, never on filled ones.
 * - The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
 * - The game also ends when all squares are non-empty.
 * - No more moves are allowed until the game ends.
 * Given an array moves where each element is another array of size 2 corresponding to row and col,
 * return the winner of the game. If the winner is A, return "A". If the winner is B, return "B".
 * If the game is a draw, return "Draw". If there are still movements to play, return "Pending".
 */
export function tictactoe(moves: number[][]): string {
	let rows = [0, 0, 0],
		cols = [0, 0, 0],
		diag1 = 0,
		diag2 = 0

	let player = 1
	for (const [r, c] of moves) {
		rows[r] += player
		cols[c] += player
		if (r === c) diag1 += player
		if (r + c === 2) diag2 += player

		if (
			Math.abs(rows[r]) === 3 ||
			Math.abs(cols[c]) === 3 ||
			Math.abs(diag1) === 3 ||
			Math.abs(diag2) === 3
		) {
			return player === 1 ? 'A' : 'B'
		}

		player = player === 1 ? -1 : 1
	}

	return moves.length === 9 ? 'Draw' : 'Pending'
}

/**
 * Naive solution
 */
export function tictactoe2(moves: number[][]): string {
	const d = Array.from({ length: 3 }, () => Array(3).fill(0))

	const isWin = () => {
		for (let i = 0; i < 3; i++) {
			if (
				(d[i][0] !== 0 && d[i][0] === d[i][1] && d[i][1] === d[i][2]) ||
				(d[0][i] !== 0 && d[0][i] === d[1][i] && d[1][i] === d[2][i]) ||
				(d[0][0] !== 0 && d[0][0] === d[1][1] && d[1][1] === d[2][2]) ||
				(d[0][2] !== 0 && d[0][2] === d[1][1] && d[1][1] === d[2][0])
			)
				return true
		}
	}

	let player = 'A'
	for (const [x, y] of moves) {
		d[x][y] = player
		if (isWin()) {
			return player
		}
		player = player === 'A' ? 'B' : 'A'
	}

	return moves.length === 9 ? 'Draw' : 'Pending'
}
