import { MyCalendarTwo } from './0731-MyCalendarTwo'

it.each(
  //  prettier-ignore
  [
    [
      [[10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]],
      [true, true, true, false, true, true]
    ],
    [
      [[26,35],[26,32],[25,32],[18,26],[40,45],[19,26],[48,50],[1,6],[46,50],[11,18]],
      [true,true,false,true,true,true,true,true,true,true]
    ],
  ]
)('should work %#', (input, output) => {
  const calendar = new MyCalendarTwo()
  expect(input.map(([a, b]) => calendar.book(a, b))).toMatchObject(output)
})
