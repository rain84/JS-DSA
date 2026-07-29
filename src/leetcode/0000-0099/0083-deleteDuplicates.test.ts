import { create } from '../utils/linked-list'
import { deleteDuplicates } from './0083-deleteDuplicates'

it('should work 1', () => {
  const input = create([1, 1, 2])
  const output = create([1, 2])

  expect(deleteDuplicates(input)).toMatchObject(output)
})

it('should work 2', () => {
  const input = create([1, 1, 2, 3, 3])
  const output = create([1, 2, 3])

  expect(deleteDuplicates(input)).toMatchObject(output)
})
