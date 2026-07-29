/**
 * {@link https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/ | 1894. Find the Student that Will Replace the Chalk}
 *
 * Topics:Array | Binary Search | Simulation | Prefix Sum
 */
export function chalkReplacer(chalk: number[], k: number): number {
  const sum = chalk.reduce((a, b) => a + b, 0)
  k %= sum

  for (let i = 0; ; i++) {
    if (k < chalk[i]) return i
    k -= chalk[i]
  }
}
