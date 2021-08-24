const reverse = require('./reverseString.js');

test('Reverse of a string is working', ()=>{
  expect(reverse('Faizan Zahid')).toBe('dihaZ naziaF');
});
