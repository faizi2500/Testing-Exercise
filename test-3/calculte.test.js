const calculator = require('./calculate');

describe('calculate operation', () => {
  test('subtract the numbers', () => {
    expect(calculator.subtraction(10, 5)).toBe(5)
  })
  test('add the numbers', () => {
    expect(calculator.addition(10, 10)).toBe(20)
  })
  test('multiply the numbers', () => {
    expect(calculator.multiplication(10, 10)).toBe(100)
  })
  test('divide the numbers', () => {
    expect(calculator.division(10, 10)).toBe(1)
  })
})