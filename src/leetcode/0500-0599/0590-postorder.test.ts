import { node, postorder } from './0590-postorder'

it.each(
  //  prettier-ignore
  [
    [
      tree1(),
      [5,6,3,2,4,1]
    ],
    [
      tree2(),
      [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
    ]
  ]
)('should work %#', (input, output) => {
  expect(postorder(input)).toMatchObject(output)
})

// prettier-ignore
function tree1() {
  return node(1, [
    node(3, [node(5), node(6)]),
    node(2),
    node(4),
  ])
}

// prettier-ignore
function tree2() {
  return node(1, [
    node(2),
    node(3, [node(6), node(7, [node(11, [node(14)])])]),
    node(4, [node(8, [node(12)])]),
    node(5, [node(9, [node(13)]), node(10)]),
  ])
}
