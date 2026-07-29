/**
 * 1544. Make The String Great
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/706/stacks-and-queues/4611/ | Link}
 *
 */
export function makeGood(s: string): string {
  const sx: string[] = []

  for (const ch of s) {
    const prev = sx.at(-1)

    if (prev && prev !== ch && prev.toLowerCase() === ch.toLowerCase()) sx.pop()
    else sx.push(ch)
  }

  return sx.join('')
}
