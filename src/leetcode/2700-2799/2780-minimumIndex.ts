/**
 * {@link https://leetcode.com/problems/minimum-index-of-a-valid-split | 2780. Minimum Index of a Valid Split}
 *
 * Topics: Array | Hash Table | Sorting
 */
export function minimumIndex(nums: number[]): number {
  const n = nums.length
  const dominant = findDominant(nums)
  let cntDominant = 0

  for (const x of nums) {
    if (x === dominant) cntDominant++
  }

  for (let i = 0, c = 0; i < n; i++) {
    if (nums[i] === dominant) {
      c++

      if (c * 2 > i + 1 && (cntDominant - c) * 2 > n - i - 1) {
        return i
      }
    }
  }

  return -1
}

function findDominant(arr: number[]) {
  let res = arr[0]
  let c = 0

  for (const x of arr) {
    if (x === res) c++
    else c--

    if (c === 0) {
      res = x
      c = 1
    }
  }
  return res
}

export function minimumIndex2(nums: number[]): number {
  const [lCnt, rCnt]: Record<number, number>[] = [{}, {}]
  const n = nums.length

  for (const x of nums) {
    rCnt[x] ??= 0
    rCnt[x]++
  }

  for (let i = 0; i < n; i++) {
    const x = nums[i]
    lCnt[x] ??= 0
    lCnt[x]++
    rCnt[x]--

    const isDominant = lCnt[x] * 2 > i + 1 && rCnt[x] * 2 > n - i - 1
    if (isDominant) return i
  }

  return -1
}
