// i printed after every 1 second upto 5
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

function x() {
  var i = 100;
  setTimeout(() => {
    console.log(i);
  }, 5000);
  console.log("Namaste Javascript"); // printed first as JS did not wait for settimeout to complete
}

x();

// Using variables at the place of let
// Printed alongwith the let method as the above x function has still 5 seconds more
// But after 5 seconds completion, value of i, that is 100 in x function is printed and then further
// 6 last value as Java is a single threaded language

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
} // 6 printed as JS stored the reference and not value

// Ability of functions to be used as variables - First class functions

// Callback functions help make JS work liek asynchronous language

// A function taking another function as argument and returning other function is called
// Higher order function

// map, filter, reduce

// map -> maps over every element of array
const arr = [1, 3, 4, 9, 21, 49, 24];

arr.map((el, idx) => {
  console.log(`For every element ${el} the index is ${idx}`);
  arr.push(el.toString());
});

console.log(arr);

