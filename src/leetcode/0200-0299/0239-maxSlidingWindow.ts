import { Deque } from 'ds/deque'

/**
 * 239. Sliding Window Maximum
 * {@link https://leetcode.com/problems/sliding-window-maximum/ | Link}
 *
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque = new Deque<number>([0])
  const res = Array(nums.length - k + 1).fill(nums[0])

  for (let i = 1; i < nums.length; i++) {
    while (!deque.isEmpty && nums[i] > nums[deque.back!]) {
      deque.popBack()
    }

    deque.pushBack(i)

    if (deque.front! <= i - k) {
      deque.popFront()
    }

    if (i >= k - 1) {
      const idx = i - k + 1
      res[idx] = nums[deque.front!]
    }
  }

  return res
}

// Arrays as deques
//
function maxSlidingWindow2(nums: number[], k: number): number[] {
  const res = Array(nums.length - k + 1).fill(nums[0])
  const deque = [0]
  const k2 = k - 1
  let first = 0

  for (let i = 1; i < nums.length; i++) {
    while (deque.length && nums[deque.at(-1)!] < nums[i]) {
      deque.pop()
    }

    if (first >= deque.length) first = deque.length

    deque.push(i)

    if (deque[first] === i - k) first++
    if (i >= k2) res[i - k2] = nums[deque[first]]
  }

  return res
}
