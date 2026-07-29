import { MyCalendar } from './0728-MyCalendar'

it.each(
  //  prettier-ignore
  [
    [
      [[10, 20], [15, 25], [20, 30]],
      [true, false, true]
    ],
  ]
)('should work %#', (input, output) => {
  const calendar = new MyCalendar()
  expect(input.map(([a, b]) => calendar.book(a, b))).toMatchObject(output)
})
