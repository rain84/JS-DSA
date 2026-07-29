import { calcEquation } from './0399-calcEquation'

it('should work 1', () => {
  const equations = [
    ['a', 'b'],
    ['b', 'c'],
  ]
  const values = [2.0, 3.0]
  const queries = [
    ['a', 'c'],
    ['b', 'a'],
    ['a', 'e'],
    ['a', 'a'],
    ['x', 'x'],
  ]
  const output = [6.0, 0.5, -1.0, 1.0, -1.0]

  expect(calcEquation(equations, values, queries)).toMatchObject(output)
})

it('should work 2', () => {
  const equations = [
    ['a', 'b'],
    ['b', 'c'],
    ['bc', 'cd'],
  ]
  const values = [1.5, 2.5, 5.0]
  const queries = [
    ['a', 'c'],
    ['c', 'b'],
    ['bc', 'cd'],
    ['cd', 'bc'],
  ]
  const output = [3.75, 0.4, 5.0, 0.2]

  expect(calcEquation(equations, values, queries)).toMatchObject(output)
})

it('should work 3', () => {
  const equations = [['a', 'b']]
  const values = [0.5]
  const queries = [
    ['a', 'b'],
    ['b', 'a'],
    ['a', 'c'],
    ['x', 'y'],
  ]
  const output = [0.5, 2.0, -1.0, -1.0]

  expect(calcEquation(equations, values, queries)).toMatchObject(output)
})

it('should work 4', () => {
  const equations = [
    ['x1', 'x2'],
    ['x2', 'x3'],
    ['x3', 'x4'],
    ['x4', 'x5'],
  ]
  const values = [3.0, 4.0, 5.0, 6.0]
  const queries = [['x2', 'x4']]
  // const queries = [
  //   ['x1', 'x5'],
  //   ['x5', 'x2'],
  //   ['x2', 'x4'],
  //   ['x2', 'x2'],
  //   ['x2', 'x9'],
  //   ['x9', 'x9'],
  // ]
  const output = [20]
  // const output = [360.0, 0.00833, 20.0, 1.0, -1.0, -1.0]

  expect(calcEquation(equations, values, queries)).toMatchObject(output)
})
