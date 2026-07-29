import { getCommon } from './2540-getCommon'

it('should work 1', () => {
  const nums1 = [1, 2, 3]
  const nums2 = [2, 4]
  expect(getCommon(nums1, nums2)).toBe(2)
})

it('should work 2', () => {
  const nums1 = [1, 2, 3, 6]
  const nums2 = [2, 3, 4, 5]
  expect(getCommon(nums1, nums2)).toBe(2)
})

it('should work 3', () => {
  const nums1 = [3, 5]
  const nums2 = [2]
  expect(getCommon(nums1, nums2)).toBe(-1)
})
