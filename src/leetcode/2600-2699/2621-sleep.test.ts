import { sleep } from './2621-sleep'

it.each(
  //  prettier-ignore
  [
    [
      100, 100
    ],
    [
      200, 200
    ],
  ]
)('should work %#', async (input, output) => {
  return expect(sleep(input)).resolves.toBe(output)
})
