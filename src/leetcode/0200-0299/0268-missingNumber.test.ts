import { missingNumber } from './0268-missingNumber'

it('should work 1', () => expect(missingNumber([3, 0, 1])).toBe(2))

it('should work 2', () => expect(missingNumber([0, 1])).toBe(2))

it('should work 3', () => expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8))
