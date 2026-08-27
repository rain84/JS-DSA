/**
 * 70. Climbing Stairs
 * {@link https://leetcode.com/problems/climbing-stairs/ | Link}
 *
 * Topics: Dynamic Programming | Memoization | Math
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 */
export function climbStairs(n: number): number {
	if (n <= 1) return 1

	let [current, prev] = [1, 1]

	for (let i = 2; i <= n; i++) {
		;[current, prev] = [current + prev, current]
	}

	return current
}
