import { AllOne } from './0432-AllOne'

it('should work 1', () => {
  const res: string[] = []
  const allOne = new AllOne()

  allOne.inc('hello')
  allOne.inc('hello')
  res.push(allOne.getMaxKey())
  res.push(allOne.getMinKey())
  allOne.inc('leet')
  res.push(allOne.getMaxKey())
  res.push(allOne.getMinKey())

  expect(res).toMatchObject(['hello', 'hello', 'hello', 'leet'])
})
