type F = (...args: number[]) => void

export function debounce(fn: F, t: number): F {
	let id: ReturnType<typeof setTimeout> | undefined

	return (...args) => {
		clearTimeout(id)
		id = setTimeout(() => fn(...args), t)
	}
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
