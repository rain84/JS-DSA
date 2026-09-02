/**
 * 1041. Robot Bounded In Circle
 * {@link https://leetcode.com/problems/robot-bounded-in-circle/ | Link}
 *
 * Topics: Math | String | Simulation
 *
 * On an infinite plane, a robot initially stands at (0, 0) and faces north.
 * Note:
 * - The north direction is the positive direction of the y-axis.
 * - The south direction is the negative direction of the y-axis.
 * - The east direction is the positive direction of the x-axis.
 * - The west direction is the negative direction of the x-axis.
 * The robot can receive one of three instructions:
 * - "G": go straight 1 unit.
 * - "L": turn 90 degrees to the left (counterclockwise).
 * - "R": turn 90 degrees to the right (clockwise).
 * The robot performs the instructions given in order, and repeats them forever.
 * Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
 */
export function isRobotBounded(instructions: string): boolean {
	const directions = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	]
	let x = 0,
		y = 0,
		current = 0

	for (const ch of instructions) {
		if (ch === 'L') {
			current = (current + 3) % 4
		} else if (ch === 'R') {
			current = (current + 1) % 4
		} else {
			const [dx, dy] = directions[current]
			x += dx
			y += dy
		}
	}

	return (x === 0 && y === 0) || current !== 0
}
