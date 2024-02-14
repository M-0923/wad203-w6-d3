const add = require('./index')

it('adds 1 and 2 to equal 3', () => {
  console.log(process.env.SUPER_SECRET)
  expect(add(1,2)).toBe(3);
});