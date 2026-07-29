import { maximum69Number } from './1323-maximum69Number'

it.each(
  //  prettier-ignore
  [
     [
      9669,
      9969
     ],
     [
      9996,
      9999
     ],
     [
      9999,
      9999
    ],
   ]
)('should work %#', (input, output) => {
  expect(maximum69Number(input)).toBe(output)
})
