# Learnings & Concepts 
## Learnt while solving problems

1. Functions can be created in JavaScript that itself return answer in the form of a new function. 
2. Combination of function and it's environment is known as Closure.
3. A function within a function with two different parameters for both the functions can be called by passing the paramters respectively during both calling of functions.
4. A function within a function accepts a value, returns the value from the function within and then returns the inside function. In the main function, a call is made for the outside function that calls the inner function and this is stored in yet another functional parameter and that can be further logged into the console.
5. When we write "this.term = term", then we are adding a new property to the instance of the class. This allows us to use the term explicitly outside. However when used implicitly it returns "NAN" - Not a Number.
6. Learning Error Handling : 

When you have to access methods from a function, create functions separated by commas within the parent function and add a return statement for the whole inner function. Return for eg, say boolean data type and if not then you can `throw new Error ("Error Message")` during the execution. Call the function first by passing values and access the method function by again passing a value.

7. Handling multiple functions within an external function : 