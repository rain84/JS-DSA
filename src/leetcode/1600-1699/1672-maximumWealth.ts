/**
 * 1672. Richest Customer Wealth
 * {@link https://leetcode.com/problems/richest-customer-wealth/ | Link}
 *
 * Topics: Array | Matrix
 *
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money
 * the i-th customer has in the j-th bank.
 * Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts.
 * The richest customer is the customer that has the maximum wealth.
 */
export function maximumWealth(accounts: number[][]): number {
	const wealths = accounts.map((arr) => arr.reduce((a, b) => a + b))
	return Math.max(...wealths)
}
