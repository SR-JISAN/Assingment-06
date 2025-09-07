1) What is the difference between var, let, and const?
=> var is function Scope & Global Scope.
     var can be reassigned to new value.
     Var can be re-declared within the same scope.
     Var hoisted to the top of its scope and initialized with.undefined.
   let & Const Block Scope.
   Let
    Let can be reassigned to a new value.
    Let cannot be re-declared within the same scope.
    Let hoisted but not initialized, resulting in a Temporal Dead Zone (TDZ) where accessing it before declaration causes a ReferenceError.
   Const 
    Const cannot be reassigned to a new value after initialization. 
    Const cannot be re-declared within the same scope.
    Const hoisted but not initialized, also causing a ReferenceError if accessed before declaration.  


 2) What is the difference between map(), forEach(), and filter()?
 => forEach() perform an action for each element without  creating a new array. 
    map() transform each element and create a new array with the transformed values.
    filter() select a subset of elements from an array based on a condition and create a new array with only those elements.

 3) What are arrow functions in ES6?
    => Arrow functions are a new way to write functions in JavaScript, 
       introduced in ES6. They offer a more concise syntax compared to traditional function expressions.

 4) How does destructuring assignment work in ES6?
    => Array
         Values are unpacked based on their position (index) within the array.
         The syntax involves using square brackets [] on the left-hand side of the assignment operator, matching the structure of the array being destructured.
       Object
         Properties are unpacked based on their key names within the object.
         The syntax involves using curly braces {} on the left-hand side of the assignment operator, matching the property names of the object.

 5) Explain template literals in ES6. How are they different from string concatenation?
    => Template literals are enclosed by backticks (`` ` ``) instead of single  
       or double quotes.
      Difference from String Concatenation:
       Traditional string concatenation in JavaScript uses the + operator to combine strings and variables.