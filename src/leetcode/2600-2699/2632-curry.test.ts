import { curry } from './2632-curry'

it.each(
  //  prettier-ignore
  [
    [
      sum, [[1],[2],[3]],
      6
    ],
    [
      sum, [[1,2],[3]],
      6
    ],
    [
      sum, [[],[],[1,2,3]],
      6
    ],
    [
      function life() { return 42; }, [[]],
      42
    ],
  ]
)('should work %#', (fn, args, output) => {
  expect(args.reduce((f, x) => f(...x), curry(fn))).toBe(output)
})

function sum(a: number, b: number, c: number) {
  return a + b + c
}
