import { countElements } from './1426-countElements'

it('should work 1', () => expect(countElements([1, 2, 3])).toBe(2))

it('should work 2', () => expect(countElements([1, 1, 3, 3, 5, 5, 7, 7])).toBe(0))

it('should work 3', () => expect(countElements([1, 3, 2, 3, 5, 0])).toBe(3))

it('should work 4', () => expect(countElements([1, 1, 2, 2])).toBe(2))
