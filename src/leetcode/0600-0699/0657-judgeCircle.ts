/**
 * 657. Robot Return to Origin
 * {@link https://leetcode.com/problems/robot-return-to-origin/ | Link}
 *
 * Topics: String | Simulation
 *
 * There is a robot starting at the position (0, 0), the origin, on a 2D plane.
 * Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
 * The move sequence is represented by a string, and the character moves[i] represents its ith move.
 * Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).
 * Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.
 */
export function judgeCircle(moves: string): boolean {
	let x = 0
	let y = 0

	for (const ch of moves) {
		if (ch === 'L') x++
		else if (ch === 'R') x--
		else if (ch === 'U') y++
		else if (ch === 'D') y--
	}

	return x === 0 && y === 0
}
