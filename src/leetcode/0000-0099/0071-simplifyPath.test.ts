import { simplifyPath } from './0071-simplifyPath'

it('should work 1', () => {
  expect(simplifyPath('/home/')).toBe('/home')
})

it('should work 2', () => {
  expect(simplifyPath('/home//foo/')).toBe('/home/foo')
})

it('should work 3', () => {
  expect(simplifyPath('/home/user/Documents/../Pictures')).toBe('/home/user/Pictures')
})

it('should work 4', () => {
  expect(simplifyPath('/../')).toBe('/')
})

it('should work 5', () => {
  expect(simplifyPath('/.../a/../b/c/../d/./')).toBe('/.../b/d')
})

it('should work 6', () => {
  expect(simplifyPath('/.')).toBe('/')
})

it('should work 7', () => {
  expect(simplifyPath('/a//b////c/d//././/..')).toBe('/a/b/c')
})

it('should work 8', () => {
  expect(simplifyPath('/..hidden')).toBe('/..hidden')
})

it('should work 9', () => {
  expect(simplifyPath('/.hidden')).toBe('/.hidden')
})

it('should work 10', () => {
  expect(simplifyPath('/hello../world')).toBe('/hello../world')
})
