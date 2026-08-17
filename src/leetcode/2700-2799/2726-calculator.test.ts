import { Calculator } from './2726-calculator'

describe('Calculator', () => {
	// LeetCode Examples
	it('example 1: add then subtract', () => {
		const result = new Calculator(10).add(5).subtract(7).getResult()
		expect(result).toBe(8)
	})

	it('example 2: multiply then power', () => {
		const result = new Calculator(2).multiply(5).power(2).getResult()
		expect(result).toBe(100)
	})

	it('example 3: divide by zero throws', () => {
		expect(() => new Calculator(20).divide(0).getResult()).toThrow(
			'Division by zero is not allowed',
		)
	})

	// Basic operations
	it('add returns calculator for chaining', () => {
		const calc = new Calculator(5)
		expect(calc.add(3)).toBe(calc)
		expect(calc.getResult()).toBe(8)
	})

	it('subtract returns calculator for chaining', () => {
		const calc = new Calculator(10)
		expect(calc.subtract(4)).toBe(calc)
		expect(calc.getResult()).toBe(6)
	})

	it('multiply returns calculator for chaining', () => {
		const calc = new Calculator(3)
		expect(calc.multiply(4)).toBe(calc)
		expect(calc.getResult()).toBe(12)
	})

	it('divide returns calculator for chaining', () => {
		const calc = new Calculator(20)
		expect(calc.divide(4)).toBe(calc)
		expect(calc.getResult()).toBe(5)
	})

	it('power returns calculator for chaining', () => {
		const calc = new Calculator(2)
		expect(calc.power(3)).toBe(calc)
		expect(calc.getResult()).toBe(8)
	})

	// Chaining multiple operations
	it('chains multiple adds', () => {
		expect(new Calculator(1).add(2).add(3).add(4).getResult()).toBe(10)
	})

	it('chains with power', () => {
		// (2 + 3) ^ 2 = 25
		expect(new Calculator(2).add(3).power(2).getResult()).toBe(25)
	})

	// Edge cases
	it('handles negative numbers', () => {
		expect(new Calculator(-5).add(-3).getResult()).toBe(-8)
		expect(new Calculator(-5).subtract(-3).getResult()).toBe(-2)
		expect(new Calculator(-5).multiply(-3).getResult()).toBe(15)
		expect(new Calculator(-6).divide(-3).getResult()).toBe(2)
	})

	it('handles decimal numbers', () => {
		expect(new Calculator(0.1).add(0.2).getResult()).toBeCloseTo(0.3)
		expect(new Calculator(10).divide(4).getResult()).toBe(2.5)
	})

	it('handles power with negative exponent', () => {
		expect(new Calculator(2).power(-1).getResult()).toBe(0.5)
		expect(new Calculator(4).power(0.5).getResult()).toBe(2)
	})

	it('handles power with zero exponent', () => {
		expect(new Calculator(5).power(0).getResult()).toBe(1)
		expect(new Calculator(0).power(0).getResult()).toBe(1)
	})

	it('getResult does not modify state', () => {
		const calc = new Calculator(10).add(5)
		const r1 = calc.getResult()
		const r2 = calc.getResult()
		expect(r1).toBe(15)
		expect(r2).toBe(15)
	})

	// Division by zero
	it('throws on divide by zero', () => {
		const calc = new Calculator(10)
		expect(() => calc.divide(0)).toThrow('Division by zero is not allowed')
		expect(calc.getResult()).toBe(10) // state unchanged
	})

	it('throws on divide by zero in chain', () => {
		expect(() => new Calculator(10).add(5).divide(0)).toThrow('Division by zero is not allowed')
	})

	it('throws on divide by negative zero', () => {
		expect(() => new Calculator(10).divide(-0)).toThrow('Division by zero is not allowed')
	})

	// Large numbers
	it('handles large numbers', () => {
		expect(new Calculator(1e10).multiply(1e10).getResult()).toBe(1e20)
	})

	// Very long chains
	it('handles long chains', () => {
		let calc = new Calculator(1)
		for (let i = 1; i <= 100; i++) {
			calc = calc.add(1)
		}
		expect(calc.getResult()).toBe(101)
	})

	// Constructor
	it('constructor sets initial value', () => {
		expect(new Calculator(42).getResult()).toBe(42)
		expect(new Calculator(0).getResult()).toBe(0)
		expect(new Calculator(-100).getResult()).toBe(-100)
	})
})
