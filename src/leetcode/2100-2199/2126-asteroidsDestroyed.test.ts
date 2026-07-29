import { asteroidsDestroyed } from './2126-asteroidsDestroyed'

it.each(
  //  prettier-ignore
  [
    [
      10, [3, 9, 19, 5, 21],
      true
    ],
    [
      5, [4,9,23,4],
      false
    ],
  ]
)('should work %#', (mass, asteroids, output) => {
  expect(asteroidsDestroyed(mass, asteroids)).toBe(output)
})
