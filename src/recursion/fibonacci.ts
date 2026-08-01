/** Top-down approach */
export const fib1 = (n: number): number => (n <= 1 ? n : fib1(n - 1) + fib1(n - 2))

/** Top-down approach */
export const fib2 = (
	(cache: number[]) =>
	(n: number): number =>
		cache[n] === undefined ? (cache[n] = fib2(n - 1) + fib2(n - 2)) : cache[n]
)([0, 1])

/**  Bottom-up approach a.k.a. tabulation */
export const fib3 = (n: number) => {
	const arr = Array(n + 1)
	;[arr[0], arr[1]] = [0, 1]

	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2]
	}

	return arr[n]
}

/**  Bottom-up approach */
export const fib4 = (n: number) => {
	let [a, b] = [0, 1]

	for (let i = 0; i < n; i++) {
		;[a, b] = [b, a + b]
	}

	return a
}
