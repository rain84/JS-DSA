import { ConcretePublisher, ConcreteSubscriber } from './pub-sub'

it('should work', () => {
	const subscribers = [
		new ConcreteSubscriber<number>((x) => x + 1),
		new ConcreteSubscriber<number>((x) => x * 2),
		new ConcreteSubscriber<number>((x) => x ** 2),
	]
	const publisher = new ConcretePublisher()

	for (const s of subscribers) publisher.subscribe(s)
	publisher.data = 7
	publisher.notify()

	expect(subscribers[0].data).toBe(8)
	expect(subscribers[1].data).toBe(14)
	expect(subscribers[2].data).toBe(49)
})
