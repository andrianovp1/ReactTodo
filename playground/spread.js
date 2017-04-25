// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function learnSpread(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

learnSpread(...person);
learnSpread(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach((name) => {
  console.log('Hi ' + name);
});

(name) => name + name;
