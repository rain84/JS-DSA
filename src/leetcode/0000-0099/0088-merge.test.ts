import { merge } from './0088-merge'

it('should work 1', () => {
  const nums1 = [1, 2, 3, 0, 0, 0]
  const m = 3
  const nums2 = [2, 5, 6]
  const n = 3
  const output = [1, 2, 2, 3, 5, 6]
  merge(nums1, m, nums2, n)
  expect(nums1).toMatchObject(output)
})

it('should work 2', () => {
  const nums1 = [1]
  const m = 1
  const nums2: number[] = []
  const n = 0
  const output = [1]
  merge(nums1, m, nums2, n)
  expect(nums1).toMatchObject(output)
})

it('should work 3', () => {
  const nums1 = [0]
  const m = 0
  const nums2: number[] = [1]
  const n = 1
  const output = [1]
  merge(nums1, m, nums2, n)
  expect(nums1).toMatchObject(output)
})

it('should work 4', () => {
  const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0]
  const m = 6
  const nums2: number[] = [1, 2, 2]
  const n = 3
  const output = [-1, 0, 0, 1, 2, 2, 3, 3, 3]
  merge(nums1, m, nums2, n)
  expect(nums1).toMatchObject(output)
})
