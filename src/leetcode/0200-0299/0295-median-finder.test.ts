import { MedianFinder, MedianFinder2 } from './0295-median-finder'

let medianFinder: MedianFinder
let medianFinder2: MedianFinder2

beforeEach(() => {
  medianFinder = new MedianFinder()
  medianFinder2 = new MedianFinder2()
})

it('should work 1', () => {
  medianFinder.addNum(1)
  medianFinder.addNum(2)
  expect(medianFinder.findMedian()).toBe(1.5)
  medianFinder.addNum(3)
  expect(medianFinder.findMedian()).toBe(2)
})

it('MedianFinder2 should work', () => {
  medianFinder2.addNum(1)
  medianFinder2.addNum(2)
  expect(medianFinder2.findMedian()).toBe(1.5)
  medianFinder2.addNum(3)
  expect(medianFinder2.findMedian()).toBe(2)
})
