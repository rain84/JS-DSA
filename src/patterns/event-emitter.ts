type TCallback = (...payload: unknown[]) => void
type TEventsMap = Map<string, Map<EventEmitter, Set<TCallback>>>

// TODO:    try to find solution to play well with WeakMap and GC
//          https://github.com/tc39/proposal-weakrefs#iterable-weakmaps
export abstract class EventEmitter {
	//  events design:
	//  Map({
	//      'eventName': Map({
	//          [instanceof EventEmitter]: Set<TCallback>
	//      })
	//  })
	private static events: TEventsMap = new Map()

	trigger(event: string, ...payload: unknown[]) {
		const cbMap = EventEmitter.events.get(event)

		if (!cbMap) return

		cbMap.forEach((cbSet, self) => {
			for (const cb of cbSet) {
				cb.apply(self, payload)
			}
		})
	}

	on(event: string, ...cbs: TCallback[]) {
		const cbMap = EventEmitter.events.get(event) ?? new Map()
		const cbSet = cbMap.get(this) ?? new Set<TCallback>()

		cbMap.set(this, new Set([...cbSet, ...cbs]))
		EventEmitter.events.set(event, cbMap)

		return () => this.off(event, ...cbs)
	}

	off(event?: string, ...cbs: TCallback[]) {
		if (event) {
			EventEmitter.deleteCallbacks(event, cbs, this)
		} else {
			for (const [event] of EventEmitter.events) {
				EventEmitter.deleteCallbacks(event, cbs, this)
			}
		}
	}

	once(event: string, cb: TCallback) {
		const wrapper: TCallback = (...args) => {
			cb(...args)
			this.off(event)
		}

		this.on(event, wrapper)
	}

	private static deleteCallbacks(event: string, cbs: TCallback[], self: EventEmitter) {
		const cbMap = EventEmitter.events.get(event)
		const cbSet = cbMap?.get(self)

		if (!cbMap || !cbSet) return

		if (cbs.length === 0) cbSet.clear()
		else for (const cb of cbs) cbSet.delete(cb)

		if (cbSet.size === 0) cbMap.delete(self)
		else cbMap.set(self, cbSet)

		if (cbMap.size === 0) EventEmitter.events.delete(event)
		else EventEmitter.events.set(event, cbMap)
	}
}
