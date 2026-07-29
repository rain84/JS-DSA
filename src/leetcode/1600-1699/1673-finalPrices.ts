/**
 * 1673. Find the Most Competitive Subsequence
 * {@link https://leetcode.com/problems/find-the-most-competitive-subsequence/ | Link}
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function finalPrices(prices: number[]): number[] {
  const res = Array(prices.length).fill(0)
  const stack: number[] = []

  for (let i = prices.length - 1; i >= 0; i--) {
    const x = prices[i]

    while (stack.length && stack.at(-1)! > x) {
      stack.pop()
    }

    const discount = stack.at(-1)! ?? 0
    res[i] = x - discount

    stack.push(x)
  }

  return res
}

/**
 * Brute-force solution
 * Time complexity: O(n^2)
 */
function finalPrices2(prices: number[]): number[] {
  const res: number[] = []

  for (let i = 0; i < prices.length; i++) {
    const x = prices[i]

    let discount = 0
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        discount = prices[j]
        break
      }
    }

    res.push(x - discount)
  }
  return res
}
