//Anonymous function as the function does not have an implicit name

const greet = function(name) {
    console.log(`Hello, ${name}`);
}

//Arrow Function. No need for return statement.

const hello = name => `Hello, ${name}`;

//Function Calls

greet('Shreyas');
console.log(hello('Deepti'));
