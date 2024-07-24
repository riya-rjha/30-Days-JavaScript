// Shadowing

console.log(a);
var a = 100;

// console.log(b);  -> cannot access let variable before initialization
let b = 200;

function name() {
  let b = 33;
  console.log(b);
}
name();
console.log(b);

// Closures - lexical environment + function

function x() {
  var a = 100;
  return function y() {
    console.log(a);
  };
}

console.log(x);
let func = x(); // x called which returned y and y is supposed to print a

// Settimeout
// Time, Tide & Javascript wait for none

function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 5000);
  console.log("Namaste Javascript"); // printed first as JS did not wait for settimeout to complete
}

// x() -> invoked without calling again as func is already invoked in line 26
