const { search, filterCategory, sorting } = require('./logic')
test('Refactor our addOne function so it is pure.', function () {
  expect(search([{ name: 'a' }, { name: 'b' }], 'a')).toEqual([{ name: 'a' }])
})
test('Refactor our addOne function so it is pure.', function () {
  expect(search([{ name: 'a' }, { name: 'b' }], ' a')).toEqual([{ name: 'a' }])
})
test('Refactor our addOne function so it is pure.', function () {
  expect(search([{ name: 'ac' }, { name: 'ab' }], 'a')).toEqual([
    { name: 'ac' },
    { name: 'ab' },
  ])
})

test('Refactor our addOne function so it is pure.', function () {
  expect(
    filterCategory([{ name: 'a', category: 'cats' }, { name: 'b' }], 'cats'),
  ).toEqual([{ name: 'a', category: 'cats' }])
})
test('Refactor our addOne function so it is pure.', function () {
  expect(
    filterCategory([
      { name: 'a', price: 25 },
      { name: 'b', price: 20 },
    ]),
  ).toEqual([
    { name: 'a', price: 25 },
    { name: 'b', price: 20 },
  ])
})
