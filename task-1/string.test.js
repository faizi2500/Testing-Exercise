const string = require('./string');

test('Length of String is ', () => {
  const name = 'Ahmed';
  const size = name.length; 
  expect(size).toEqual(5);
});

test('Invalid string length', ()=>{
  expect(string('Ahmed Anjum')).toBe('Invalid string size');
});