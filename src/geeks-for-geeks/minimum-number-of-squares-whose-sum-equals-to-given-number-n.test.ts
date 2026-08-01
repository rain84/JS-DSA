import { getN } from './minimum-number-of-squares-whose-sum-equals-to-given-number-n'

// Get N of squads
it('should work', () => {
	expect(getN(13)).toBe(2)
	expect(getN(27)).toBe(3)
})
