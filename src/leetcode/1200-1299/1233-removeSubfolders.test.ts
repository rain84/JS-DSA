import { removeSubfolders, removeSubfolders2, removeSubfolders3 } from './1233-removeSubfolders'

it.each(
  //  prettier-ignore
  [
    [
      ["/a","/a/b","/c/d","/c/d/e","/c/f"],
      ["/a","/c/d","/c/f"]
    ],
    [
      ["/a","/a/b/c","/a/b/d"],
      ["/a"]
    ],
    [
      ["/a/b/c","/a/b/ca","/a/b/d"],
      ["/a/b/c","/a/b/ca","/a/b/d"]
    ]
  ]
)('should work %#', (input, output) => {
  sort(output)
  expect(sort(removeSubfolders(input))).toMatchObject(output)
  expect(sort(removeSubfolders2(input))).toMatchObject(output)
  expect(sort(removeSubfolders3(input))).toMatchObject(output)
})

const sort = (arr: string[]) => arr.sort()
