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