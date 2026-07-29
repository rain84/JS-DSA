/**
 * 1598. Crawler Log Folder
 * {@link https://leetcode.com/problems/crawler-log-folder/ | Link}
 */
export function minOperations(logs: string[]): number {
  let res = 0

  for (const x of logs) {
    if (x === '../') res && res--
    else if (x !== './') res++
  }

  return res
}
