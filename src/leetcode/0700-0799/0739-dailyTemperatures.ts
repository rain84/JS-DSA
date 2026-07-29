/**
 * 739. Daily Temperatures
 * {@link  https://leetcode.com/problems/daily-temperatures | Link}
 *
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [0]
  const res = Array(temperatures.length).fill(0)

  for (let i = 1; i < temperatures.length; i++) {
    while (stack.length && temperatures[stack.at(-1)!] < temperatures[i]) {
      const j = stack.pop()!
      res[j!] = i - j
    }

    stack.push(i)
  }

  return res
}
