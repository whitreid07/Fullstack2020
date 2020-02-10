const {add , subtract } = require('./calc');

const a = process.argv[2];
const b = process.argv[3];
const operator = process.argv[4]

// console.log(a, b);
// switch (operator) {
//   case "+": {
//     const n = add(a, b);
//     console.log(n);
//     break
//   }
//   case: "-": {
//     const n = subtract(a, b);
//     console.log(n)
//     break
//   }

let n;
switch (operator) {
  case "+": {
    n = add(a, b);
    break;
  }
  case "-": {
   n = subtract(a, b);
    break;
  }
}