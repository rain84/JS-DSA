/**
 * 1673. Find the Most Competitive Subsequence
 * {@link https://leetcode.com/problems/find-the-most-competitive-subsequence/ | Link}
 *
 */
export function mostCompetitive(nums: number[], k: number): number[] {
  const stack: number[] = []
  const l = nums.length

  for (let i = 0; i < l; i++) {
    const x = nums[i]

    while (stack.length && x < stack.at(-1)! && l - i > k - stack.length) {
      stack.pop()
    }

    stack.push(x)
  }

  stack.length = k

  return stack
}
