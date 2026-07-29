import { minimizeXor } from './2429-minimizeXor'

it.each(
  //  prettier-ignore
  [
    [
      3, 5,
      3
    ],
    [
      1, 12,
      3
    ],
    [
      25, 72,
      24
    ]
  ]
)('should work %#', (num1, num2, output) => {
  expect(minimizeXor(num1, num2)).toBe(output)
})
