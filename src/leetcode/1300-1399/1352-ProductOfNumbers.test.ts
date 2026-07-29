import { ProductOfNumbers } from './1352-ProductOfNumbers'

it('ProductOfNumbers should work', () => {
  const productOfNumbers = new ProductOfNumbers()

  productOfNumbers.add(3) // [3]
  productOfNumbers.add(0) // [3,0]
  productOfNumbers.add(2) // [3,0,2]
  productOfNumbers.add(5) // [3,0,2,5]
  productOfNumbers.add(4) // [3,0,2,5,4]

  expect(productOfNumbers.getProduct(2)).toBe(20)
  expect(productOfNumbers.getProduct(3)).toBe(40)
  expect(productOfNumbers.getProduct(4)).toBe(0)

  productOfNumbers.add(8) // [3,0,2,5,4,8]

  expect(productOfNumbers.getProduct(2)).toBe(32)
})
