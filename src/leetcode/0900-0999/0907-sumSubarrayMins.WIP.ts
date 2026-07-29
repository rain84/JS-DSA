/**
 * 907. Sum of Subarray Minimums
 * {@link https://leetcode.com/problems/sum-of-subarray-minimums | Link}
 *
 * WIP, too long execution
 * Description of the solution can be checked here {@link https://doocs.github.io/leetcode/en/lc/907/}
 *
 */
export function sumSubarrayMins(arr: number[]): number {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    const stack: number[] = []
    for (let j = i; j < arr.length; j++) {
      const x = arr[j]

      while (stack.length && stack.at(-1)! > x) stack.pop()
      stack.push(x)

      sum += stack[0]
    }
  }

  return sum % (1e9 + 7)
}
