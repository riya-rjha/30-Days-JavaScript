# Learnings & Concepts 
## Learnt while solving problems

1. Functions can be created in JavaScript that itself return answer in the form of a new function. 

2. Combination of function and it's environment is known as Closure.

3. A function within a function with two different parameters for both the functions can be called by passing the paramters respectively during both calling of functions.

4. A function within a function accepts a value, returns the value from the function within and then returns the inside function. In the main function, a call is made for the outside function that calls the inner function and this is stored in yet another functional parameter and that can be further logged into the console.

5. When we write "this.term = term", then we are adding a new property to the instance of the class. This allows us to use the term explicitly outside. However when used implicitly it returns "NAN" - Not a Number.

6. Learning Error Handling : 

When you have to access methods from a function, create functions separated by commas within the parent function and add a return statement for the whole inner function. Return for eg, say boolean data type and if not then you can `throw new Error ("Error Message")` during the execution. Call the function first by passing values and access the method function by again passing a value.

7. Handling multiple functions within an external function : To handle multiple functions within the external function block, we create functions by the normal process and then at the end we return all the functions in a parentheses format. 

8. ### Arrays.map() function alternatives

i. To create a mapping function for every element in the array we can simply run a for loop from index starting from 0 to the length of array.

ii. Another method is to use "forEach()" loop, where for every element and the index of array, we assign values of element and index to the function. 

iii. We can also use "forOf()" loop, where in we pass an element of the array and then assign values of element and index to the function and then increment index at every iteration. 

9. ### Special Property of JavaScript
When functions are being called and parameters are being sent, if more than one parameter is passed but not required then JS automatically ignores the second parameter and executes the rest of the code without showing any error.

10. In JS, forEach() is a higher order function used for arrays, but forof() can be used for all arrays, strings, hash maps etc. 

11. ### Arrays.filter() function alternative

Use forEach and forof method and remeber to push elements in array rather than assigning elements at particular indices as this might cause some spaces to remain blank. Whereas push function will push all elements in array irrespective of any blank space in between. Preferrable method for arrays : forEach()

12. Composition of functions : If there exists an array of functions which can be represented as : 
`functions = [x=>x+1, x=>x*x]`, then composition of functions is g(h(x)), where g(x) is the last function from the right and h(x) is the second last function from the right.

