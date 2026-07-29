import { parseBoolExpr } from './1106-parseBoolExpr'

it.each(
  //  prettier-ignore
  [
    [
      "&(|(f))",
      false
    ],
    [
      "|(f,f,f,t)",
      true
    ],
    [
      "!(&(f,t))",
      true
    ]
  ]
)('should work %#', (input, output) => {
  expect(parseBoolExpr(input)).toBe(output)
})
