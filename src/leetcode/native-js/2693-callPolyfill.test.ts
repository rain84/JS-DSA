import './2693-callPolyfill'

jest.spyOn(console, 'log')

it('should work 1', () => {
	function tax(price: number, taxRate: number) {
		const totalCost = price * (1 + taxRate)
		console.log(`The cost of ${this?.item} is ${totalCost}`)
	}

	tax.callPolyfill({ item: 'salad' }, 10, 0.1)
	expect(jest.mocked(console.log).mock.calls[0][0]).toBe('The cost of salad is 11')
})
