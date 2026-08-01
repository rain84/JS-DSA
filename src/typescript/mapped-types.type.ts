export type Setters<State> = {
	[K in keyof State & string as `set${Capitalize<K>}`]: (value: State[K]) => void
}

export type Getters<State> = {
	[K in keyof State & string as `get${Capitalize<K>}`]: () => State[K]
}

export type Store<State> = Getters<State> & Setters<State>

type PersonState = {
	name: string
	// age: number
}

export type PersonStore = Store<PersonState> & PersonState
const personStore: PersonStore = {
	name: '',
	getName() {
		return this.name
	},
	setName(name) {
		this.name = name
	},
}
// personStore.setAge(1)
personStore.setName('Fedor')

const name = personStore.getName()
console.log(name)
