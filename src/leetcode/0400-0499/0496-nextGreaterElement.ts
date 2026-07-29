/**
 * 496. Next Greater Element I
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/706/stacks-and-queues/4612/ | Link}
 *
 */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const res: number[] = []
  const map: Record<number, number> = {}
  const stack: number[] = [nums2[0]]

  for (let i = 1; i < nums2.length; i++) {
    const nextGE = nums2[i]

    while (nextGE > stack.at(-1)!) {
      const x = stack.pop()!
      map[x] = nextGE
    }
    stack.push(nextGE)
  }

  while (stack.length) {
    map[stack.pop()!] = -1
  }

  for (const i of nums1) res.push(map[i])

  return res
}
