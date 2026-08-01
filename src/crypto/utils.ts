/** greatest common divisor */
export const gcd = (a: number, b: number): number => (a ? gcd(b % a, a) : b)

export const isCoprime = (a: number, b: number) => {
	return gcd(a, b) === 1
}

export const euler = (x: number) => {
	let c = 1

	for (let i = 1; i < x - 1; i++) {
		if (isCoprime(x, i)) c++
	}

	return c
}

/**
 * {@link https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes}
 */
export const primes = (n: number): number[] => {
	const arr = Array(n + 1).fill(1)
	arr[0] = arr[1] = 0

	for (let i = 2; i <= n; i++) {
		if (arr[i]) {
			for (let j = i ** 2; j <= n; j += i) {
				arr[j] = 0
			}
		}
	}

	const res: number[] = []
	for (let i = 2; i <= n; i++) {
		if (arr[i]) res.push(i)
	}

	return res
}
