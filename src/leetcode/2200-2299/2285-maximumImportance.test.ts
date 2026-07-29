import { maximumImportance, maximumImportance2, maximumImportance3 } from './2285-maximumImportance'

it.each(
  //  prettier-ignore
  [
    [
      5,
      [[0, 1],[1, 2],[2, 3],[0, 2],[1, 3],[2, 4],],
      43
    ],
    [
      5,
      [[0,3],[2,4],[1,3]],
      20
    ],
  ]
)('should work %#', (n, roads, output) => {
  expect(maximumImportance(n, roads)).toBe(output)
  expect(maximumImportance2(n, roads)).toBe(output)
  expect(maximumImportance3(n, roads)).toBe(output)
})
