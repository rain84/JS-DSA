import { delay } from 'utils/time'
import {} from './2627-debounce'

it('debounce() should work', async () => {
  let c = 0
  const inc = () => c++
  const delayedInc = debounce(inc, 50)

  delayedInc()
  delayedInc()
  expect(c).toBe(0)

  await delay(45)
  expect(c).toBe(0)

  await delay(5)
  expect(c).toBe(1)
})
