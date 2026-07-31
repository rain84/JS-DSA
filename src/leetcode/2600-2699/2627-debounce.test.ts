import { debounce } from './2627-debounce'

beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())

it('debounce should work', () => {
	let count = 0
	const debounced = debounce((x: number) => (count = x), 100)

	debounced(1) // t=0
	vi.advanceTimersByTime(50)
	debounced(2) // t=50 — отменяет первый вызов

	vi.advanceTimersByTime(99) // t=149 — ещё не время
	expect(count).toBe(0)

	vi.advanceTimersByTime(1) // t=150 — сработал только последний вызов
	expect(count).toBe(2)
})
