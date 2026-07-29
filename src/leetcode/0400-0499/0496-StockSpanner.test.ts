import { StockSpanner } from './0496-StockSpanner'

it('should work 1', () => {
  const stockSpanner = new StockSpanner()
  const res: number[] = []

  for (const x of [100, 80, 60, 70, 60, 75, 85]) {
    const next = stockSpanner.next(x)
    res.push(next)
  }

  expect(res).toMatchObject([1, 1, 1, 2, 1, 4, 6])
})

it('should work 2', () => {
  const stockSpanner = new StockSpanner()
  const res: number[] = []

  for (const x of [28, 14, 28, 35, 46, 53, 66, 80, 87, 88]) {
    const next = stockSpanner.next(x)
    res.push(next)
  }

  expect(res).toMatchObject([1, 1, 3, 4, 5, 6, 7, 8, 9, 10])
})
