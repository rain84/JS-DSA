import { toAlphabetKey } from 'utils/string'

const obj: Record<string, number> = {}

const degree = 3
let i = 10 ** degree
let data = 0
while (i--) obj[toAlphabetKey(i)] = i

/** FOR - IN LOOP */
let start = performance.now()
for (const key in obj) {
  data = obj[key]
}
console.log(performance.now() - start)

/** FOR - OF LOOP */
start = performance.now()
const keys = Object.keys(obj)
for (const key of keys) {
  data = obj[key]
}
console.log(performance.now() - start)
