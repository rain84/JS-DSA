import { Deque } from '../../../ds/deque'

/**
 * 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 * {@link https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/ | Link}
 *
 */
export function longestSubarray(nums: number[], limit: number): number {
  let res = 0
  let l = 0
  const maxQueue: number[] = []
  const minQueue: number[] = []

  for (let r = 0; r < nums.length; r++) {
    while (maxQueue.length && nums[maxQueue.at(-1)!] < nums[r]) maxQueue.pop()
    while (minQueue.length && nums[minQueue.at(-1)!] > nums[r]) minQueue.pop()
    maxQueue.push(r)
    minQueue.push(r)

    const diff = nums[maxQueue[0]] - nums[minQueue[0]]

    if (diff <= limit) {
      res = Math.max(res, r - l + 1)
    } else {
      l++

      if (maxQueue[0] < l) maxQueue.shift()
      if (minQueue[0] < l) minQueue.shift()
    }
  }

  return res
}

// with DEQUES for min and max
export function longestSubarray2(nums: number[], limit: number): number {
  if (nums.length === 1) return 1

  let res = 0
  let l = 0
  let r = 1
  const maxDeque = new Deque([0]) // first is Max
  const minDeque = new Deque([0]) // first is Min

  while (l !== nums.length) {
    isDefined(maxDeque.front)
    isDefined(minDeque.front)
    isDefined(maxDeque.back)
    isDefined(minDeque.back)

    if (minDeque.front < l) minDeque.popFront()
    if (maxDeque.front < l) maxDeque.popFront()

    if (r < nums.length) {
      while (!maxDeque.isEmpty && nums[r] > nums[maxDeque.back]) maxDeque.popBack()
      while (!minDeque.isEmpty && nums[r] < nums[minDeque.back]) minDeque.popBack()
      if (maxDeque.back !== r) maxDeque.pushBack(r)
      if (minDeque.back !== r) minDeque.pushBack(r)
    }

    const diff = nums[maxDeque.front] - nums[minDeque.front]

    if (diff <= limit) {
      const length = r - l + 1
      res = Math.max(res, length)

      if (r === nums.length - 1) break
      r++
    } else {
      l++
    }
  }

  return res
}

function isDefined<T>(x: T): asserts x is Exclude<T, undefined> {
  if (x === undefined) throw new Error('Value is not defined')
}
