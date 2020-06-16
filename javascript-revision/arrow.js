//Anonymous function as the function does not have an implicit name

const greet = function(name) {
    console.log(`Hello, ${name}`);
}

//Arrow Function. No need for return statement.

//Arrow Functions are great for the 'this' keyword.

const hello = name => `Hello, ${name}`;

const add = (a, b) => a + b;
//Function Calls

greet('Shreyas');
console.log(hello('Deepti'));
console.log(add(3,5));
