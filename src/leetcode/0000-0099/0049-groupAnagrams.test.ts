import { groupAnagrams } from './0049-groupAnagrams'

it('should work 1', () => {
  const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
  const output = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]

  expect(sort(groupAnagrams(input))).toMatchObject(sort(output))
})

it('should work 2', () => {
  const input = ['']
  const output = [['']]

  expect(groupAnagrams(input)).toMatchObject(output)
})

it('should work 3', () => {
  const input = ['a']
  const output = [['a']]

  expect(groupAnagrams(input)).toMatchObject(output)
})

function sort(a: string[][]) {
  return a.map((a) => a.sort()).sort()
}
