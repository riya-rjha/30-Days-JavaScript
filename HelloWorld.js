var createHelloWorld = function() {
    return function(){
        return ("Hello World!");
    }
}

const f = createHelloWorld();
f();

console.log(f()); //Hello World printed in terminal

//Factory of Functions
const functionWithinFunction = function(a){
    return function sum(b) {
        return (a+b);
    }
}

const sumCalc = functionWithinFunction(5);
sumCalc(5);

console.log(sumCalc(5));