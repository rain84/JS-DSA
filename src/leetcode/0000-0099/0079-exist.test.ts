import { exist } from './0079-exist'

it.each(
  //  prettier-ignore
  [
    [
      [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED",
      true
    ],
    [
      [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE",
      true
    ],
    [
      [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB",
      false
    ],
    [
      [["a","a"]], "aaa",
      false
    ],
    [
      [["a"]], "a",
      true
    ]
  ]
)('should work %#', (board, word, output) => {
  expect(exist(board, word)).toBe(output)
})
