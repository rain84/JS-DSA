/**
 * 1052. Grumpy Bookstore Owner
 * {@link https://leetcode.com/problems/grumpy-bookstore-owner/ | Link}
 */
export function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  const n = customers.length
  let sum = customers.reduce((a, b, i) => a + (grumpy[i] ^ 1) * b, 0)
  let r = 0

  while (r < minutes) {
    sum += grumpy[r] * customers[r++]
  }

  let res = sum
  for (let l = 0; r < n; l++, r++) {
    sum += grumpy[r] * customers[r]
    sum -= grumpy[l] * customers[l]
    res = Math.max(res, sum)
  }

  return res
}
