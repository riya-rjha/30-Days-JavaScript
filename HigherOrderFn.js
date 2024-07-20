//Apply transform over each element of the array
let arr = [1, 2, 3];

function plusOne(n) {
  return n + 1;
}

function plusIndex(n, i) {
  return n + i;
}

function constant(n) {
  return 140;
}

//Using for loop
var map = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = func(arr[i]);
  }
  return newArr;
};

//Using forEach loop
var map2 = (arr, func) => {
  let newArr = [];
  arr.forEach((el, i) => {
    newArr[i] = func(el, i);
  });
  return newArr;
};

//Using forOf loop
var map3 = (arr, func) => {
  let newArr = [];
  let index = 0;
  for (const el of arr) {
    newArr[index] = func(el, index);
    index++;
  }
  return newArr;
};

const newArray = map(arr, plusOne);
console.log(newArray);

const newArray2 = map2(arr, plusIndex);
console.log(newArray2);

const newArray3 = map3(arr, constant);
console.log(newArray3);

//In-built method of mapping
arr.map((el, idx) => {
  arr[idx] = el + 5;
});
console.log(arr);
//Here the array changes as the map function is implemented incorrectly
//And the goal is to change the original array

//Unchanged original array
let newArr = arr.map((el, idx) => (el = el + idx));
console.log(arr); //Unchanged (map function not in parenthesis)
console.log(newArr);

/* -------------- */

//Apply filter to array
let array = [0, 10, 20, 30];
function greaterThan10(n) {
  return n > 10;
}
function firstIndex(n, i) {
  return i === 0;
}
function squareI(n, i) {
  return Math.pow(i, 2);
}

var filter = (arr, fn) => {
  let newFilteredArr = [];
  arr.forEach((el, idx) => {
    if (fn(el, idx)) {
      newFilteredArr.push(el);
    }
  });
  return newFilteredArr;
};

const arrIII = [1, 2, 3];

var filterII = (arrIII, fn) => {
  let newFilteredArr = [];
  let idx = 0;
  for (let el of arrIII) {
    if (fn(el, idx)) {
      newFilteredArr[idx] = el;
      idx++;
    }
  }
  return newFilteredArr;
};

const newArrayI = filter(array, greaterThan10);
console.log(newArrayI);

const newArrayII = filterII(arrIII, firstIndex);
console.log(newArrayII);

const sqArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArrayIII = filter(sqArr, squareI);
console.log(newArrayIII);

const ansArr = [1, 2, 30];
const newArrFiltered = ansArr.filter((el) => el % 2 === 0);
console.log(newArrFiltered);

// ------------------------ //

// Find maximum of array using reduce - Accumulator + Current

// Without using Reduce
let JSArr = [1, 4, 0, -4, 9, 3, 7, -104, 27, 21, -8763];

let largest = -11111;
for (let i = 0; i < JSArr.length; i++) {
  if (largest < JSArr[i]) {
    largest = JSArr[i];
  }
}

console.log(largest);

// Using Reduce
let max = -11111;
console.log(
  JSArr.reduce((acc, curr) => {
    if (curr > acc) acc = curr;
    return acc;
  }, max)
);

// List out a parameter from a JSON

const arrObject = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

console.log(arrObject.map((obj) => obj.lastName));

// {26: 2, 75: 1, 50: 1}

console.log(
  arrObject.reduce((acc, curr) => {
    if (acc[curr.age]) {
      acc[curr.age]++;
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {})
);

// Calculate all those firstnames of people who's age is less than 60

console.log(
  arrObject.reduce((acc, curr) => {
    if (curr.age < 60) {
      acc.push(curr.firstName + ": " + curr.age);
    }
    return acc;
  }, [])
);

// Using Filter + Map function

const answerToObj = arrObject
  .filter((obj) => obj.age < 60)
  .map((obj) => obj.firstName);
console.log(answerToObj);
