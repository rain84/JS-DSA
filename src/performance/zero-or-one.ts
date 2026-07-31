/** by "mod" operator  */

const n = 1_000_000
let start = performance.now()
let c = n
let x = 0
while (c--) {
  x = x % 2
}
console.log(performance.now() - start)

/** by bitwise "& 1"  */
start = performance.now()
c = n
x = 0
while (c--) {
  x = x & 1
}
console.log(performance.now() - start)
