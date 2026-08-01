import { encode } from './feistel-cipher'

// Feistel network
xit('should encode with data', () => {
	expect(encode(100, 200)).toMatchObject([203, 99])
})
