// class Calculator {
//   constructor(num1, num2){
//     this.num1 = num1;
//     this.num2 = num2;
//     };
  
//   add(num1, num2) {
//     return num1 + num2;
//   }

//   subtraction(num1, num2) {
//     num1 - num2;
//   }

//   multiplication(num1, num2) {
//     return num1 * num2;
//   }

//   division(num1, num2){
//     return num1 / num2;
//   }
// };

const calculator = {
  addition: function(num1, num2) {
    return num1 + num2;
  },
  
  subtraction: function(num1, num2) {
    return num1 - num2;
  },
  multiplication: function(num1, num2) {
    return num1 * num2;
  },

  division: function(num1, num2) {
    return num1 / num2;
  }
}

module.exports = calculator;