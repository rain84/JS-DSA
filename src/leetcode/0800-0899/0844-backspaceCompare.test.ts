import { backspaceCompare } from './0844-backspaceCompare'

it('should work 1', () => {
  expect(backspaceCompare('ab#c', 'ad#c')).toBeTruthy()
})

it('should work 2', () => {
  expect(backspaceCompare('ab##', 'c#d#')).toBeTruthy()
})

it('should work 3', () => {
  expect(backspaceCompare('a#c', 'b')).toBeFalsy()
})

it('should work 4', () => {
  expect(backspaceCompare('xywrrmp', 'xywrrmu#p')).toBeTruthy()
})
