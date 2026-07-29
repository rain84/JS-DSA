import { sortPeople, sortPeople2 } from './2418-sortPeople'

it.each(
  //  prettier-ignore
  [
    [
      ["Mary","John","Emma"], [180,165,170],
      ["Mary","Emma","John"]
    ],
    [
      ["Alice","Bob","Bob"], [155,185,150],
      ["Bob","Alice","Bob"]
    ]
  ]
)('should work %#', (names, heights, output) => {
  expect(sortPeople(names, heights)).toMatchObject(output)
  expect(sortPeople2(names, heights)).toMatchObject(output)
})
