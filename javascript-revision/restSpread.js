const hobbies = ['Sports', 'Cooking', 'Programming'];
const copiedHobbies = [...hobbies]; //Spread is basically the ... followed by an object. It rips apart
//all the properties of that object and assigns it to the data structure surrounding it.
copiedHobbies.forEach(element => console.log(element));

const person = {
    name: 'Shreyas',
    age: 19,
    knowsNode: true,
};

const newPerson = {...person};
console.log(newPerson);

//Rest on the other hand is like kwargs in python. It takes in multiple arguements and uses them.

const createArray = (...args) => {
    return args;
}

console.log(createArray('Shreyas', 'is', 'a', 'mad', 'lad'));