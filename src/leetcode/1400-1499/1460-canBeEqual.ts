/**
 * 1460. Make Two Arrays Equal by Reversing Subarrays
 * {@link https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/ | Link}
 *
 * Topics: Array | Hash Table | Sorting
 */
export function canBeEqual(target: number[], arr: number[]): boolean {
  target.sort()
  arr.sort()
  return target.every((x, i) => x === arr[i])
}

export function canBeEqual2(target: number[], arr: number[]): boolean {
  return target.sort().join('.') === arr.sort().join('.')
}

export function canBeEqual3(target: number[], arr: number[]): boolean {
  const cnt: Record<number, number> = {}
  for (const x of target) {
    cnt[x] = (cnt[x] ?? 0) + 1
  }

  for (const x of arr) {
    cnt[x]--
    if (cnt[x] < 0) return false
  }

  return Object.values(cnt).every((x) => x === 0)
}

export function canBeEqual4(target: number[], arr: number[]): boolean {
  const cnt = Array(1001).fill(0)
  const n = target.length

  for (let i = 0; i < n; i++) {
    cnt[target[i]]++
    cnt[arr[i]]--
  }

  return cnt.every((x) => x === 0)
}
