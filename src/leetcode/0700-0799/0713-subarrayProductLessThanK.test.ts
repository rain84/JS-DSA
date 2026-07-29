import {
  numSubarrayProductLessThanK,
  subarrayProductLessThanK,
} from './0713-subarrayProductLessThanK'

describe('numSubarrayProductLessThanK', () => {
  it('should work', () => {
    const result = numSubarrayProductLessThanK([10, 5, 2, 6], 100)
    expect(result).toBe(8)
  })
})

describe('subarrayProductLessThanK', () => {
  it('should work', () => {
    const result = subarrayProductLessThanK([10, 5, 2, 6], 100)
    expect(result).toMatchObject([[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]])
  })
})
